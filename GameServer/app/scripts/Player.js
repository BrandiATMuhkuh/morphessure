/**
 * Created by jbr134 on 24/03/15.
 */
'use strict';


/**
 * After adding to game, setGame() must be used to set game object
 */
class Player{

  constructor(name){
    this.name = name;
    this.grid = [];
    this.game = null;
    this.position = [0,0]; //gid positions
    this.trapList = null;
    this.hintList = null;
    this.isPlayer = false;
    this.player = null;
    this.isPlaying = false; //If true this player can move otherwise it is deactivated


    //Add server listeners
    //add a server move player listener
    comm.addServerMovePlayer((function(data){
      this.serverMovePlayer(data);
    }).bind(this));

}


  /**
   * Gives back this players name
   * @returns {*} name of current player
   */
  getName(){
    return this.name;
  }

  /**
   * This will add the phaserGame object so in
   * player can use it to manipulate objects
   * @param phaserGame
   */
  setGame(phaserGame){
    this.game = phaserGame;
  }

  /**
   * Return the phaser game object
   * @returns {*} phaser game object
   */
  getGame(){
    return this.game;
  }


  /**
   * This will create the world aka background of the players world
   * I user this coordination system: http://www.redblobgames.com/grids/hexagons/
   * @param offSet is a multiplier number (e.g. 0,1,2,...)
   * @param leftRight Number of tiles from left to right
   * @param topDown Number of tiles from top to down
   */
  renderWorld(offSet, leftRight, topDown){

    offSet = offSet * leftRight * 66;
    //offSet=offSet;

    //Create background images
    for (var topLeft = 0; topLeft < leftRight; topLeft = topLeft +1){

      var fullOff = topLeft*107;

      var iArr = [];
      for(var rightOff = 0; rightOff < topDown; rightOff = rightOff +1){
        iArr.push({x:66*rightOff+offSet,y:fullOff});
        //this.grid.push({x:66*rightOff+offSet,y:fullOff});
      }
      this.grid.push(iArr);

      iArr = [];
      for(var rightOff = 0; rightOff < topDown; rightOff = rightOff +1){
        iArr.push({x:66*rightOff-65/2+offSet,y:fullOff+53});
      }
      this.grid.push(iArr);
    }


    //Fill all grid elements with random tiles
    for (var xPos = 0; xPos < leftRight; xPos = xPos +1){
      for(var yPos = 0; yPos < topDown; yPos = yPos +1){
        this.grid[xPos][yPos].tile =
        this.addSprite(xPos, yPos, Assets.tiles[Math.floor(Math.random()*Assets.tiles.length)]);
      }
    }

  }

  /**
   * This will add a sprite on the grid gridPosition
   * @param xPos Position in the grid
   * @param yPos Position in the grid
   * @param name Name of the sprite
   * @param width
   * @param height
   * @param xOff
   * @param yOff
   * @returns {*} return the sprite
   */
  addSprite(xPos, yPos, name, width, height, xOff, yOff){

    if(xOff === undefined){
      xOff = 0;
    }

    if(yOff === undefined){
      yOff = 0;
    }

    var s = this.game.add.sprite(this.grid[xPos][yPos].x+xOff,this.grid[xPos][yPos].y+yOff, name);

    if(width != undefined){
      s.width = width;
    }

    if(height != undefined){
      s.height = height;
    }

    return s;
  }



  /**
   * This will render all hints on the map
   */
  renderHints(){
    for (var hint in this.hintList){

      var s = this.addSprite(this.hintList[hint][0],this.hintList[hint][1], 'stoneRing.png');
      this.grid[this.hintList[hint][0]][this.hintList[hint][1]].hint = s;


      //The goal is to just have always one click listener active so noone can do anything wrong.
      s.inputEnabled = true;

      //bind function does the trick:
      //http://stackoverflow.com/questions/20279484/how-to-access-the-correct-this-context-inside-a-callback
      //In the future i would like to use fat arrows =>
      s.events.onInputDown.add((function(hint){
        return function(){
          this.setIsPlaying(false); //Deactivate the movement of the current player
          comm.clientMovePlayer(this.getName(), hint);
        }
      }(hint)).bind(this));
      s.inputEnable = false;
    }

    //TODO This is a temporarily turn on. This will later be activated by the Researcher
    this.setIsPlaying(true);

  }


  /**
   * This will activate or deactivate the click listeners
   * @param playing
   */
  setIsPlaying(playing){
    for (var hint in this.hintList) {
      var _hint = this.grid[this.hintList[hint][0]][this.hintList[hint][1]].hint;
      //console.log(_hint);
      if(_hint !== undefined){
        _hint.inputEnabled = playing;
      }
    }
  }

  /**
   * Set all hints for this player
   * @param hintList is a simple list numbers [1,2,5,7,9]
   */
  setHints(hintList){
    this.hintList = hintList;
  }

  /**
   * A list of game world traps and their position
   * Element =
   * {
   *    position: 1,
   *    name: "frog"
   * }
   * @param trapList
   */
  setTraps(trapList){
    this.trapList = trapList;
  }

  /**
   * This will render all taps on the map
   */
  renderTraps(){

    for (var traps in this.trapList){
      this.grid[this.trapList[traps].position[0]][this.trapList[traps].position[1]].trap =
      this.addSprite(this.trapList[traps].position[0], this.trapList[traps].position[1], this.trapList[traps].name,48,48,10,10);
    }

  }

  /**
   * This will move player to @position at it's own grid
   * grid position similar to http://www.redblobgames.com/grids/hexagons/
   * @param x
   * @param y
   */
  clientMovePlayer(x,y){
    this.setIsPlaying(false);//Turn of players ability to move
    this.position[0] = x;
    this.position[1] = y;

    this.game.add.tween(this.player).to({
      x: this.grid[x][y].x,
      y: this.grid[x][y].y
    }, 1000, Phaser.Easing.Linear.None, true, 0, 0, false);
  }

  /**
   * Server tells client to move position
   * this will only be executed if the player
   * is the same as the server says
   * @param data
   */
  serverMovePlayer(data){
    if(data.name == this.getName()){
      this.clientMovePlayer(this.hintList[data.hintNr][0],this.hintList[data.hintNr][1]);
    }
  }


  /**
   * Return current position of player on gird
   * @returns {*}
   */
  getPlayerPosition(){
    return this.position;
  }

  /**
   * This will render the player on the board
   */
  renderPlayer(){
    this.player = this.addSprite(0, 0, 'player', 48,48,0,0);
    this.player.animations.add('run');
    this.player.animations.play('run', 15, true);
    this.player.anchor.setTo(-0.1, -0.1);
    //this.game.camera.follow(this.player); //camera will from now on follow the player

  }

}
