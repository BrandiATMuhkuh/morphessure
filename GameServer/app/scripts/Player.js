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
    this.position = 0;
    this.trapList = null;
    this.hintList = null;
  }


  getName(){
    return this.name;
  }

  setGame(phaserGame){
    this.game = phaserGame;
  }

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
    for (var topLeft = 0; topLeft < leftRight; topLeft = topLeft +1){
      for(var rightOff = 0; rightOff < topDown; rightOff = rightOff +1){
        this.addSprite(topLeft, rightOff, Assets.tiles[Math.floor(Math.random()*Assets.tiles.length)]);
      }

    }

  }

  /**
   * This will add a sprite on the grid gridPosition
   * @param gridPosition Position in the grid (e.g 0,1,15,...)
   * @param name Name of the sprite
   * @param width
   * @param height
   * @param xOff
   * @param yOff
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
  }



  /**
   * This will render all hints on the map
   */
  renderHints(){
    for (var hint in this.hintList){
      this.addSprite(this.hintList[hint][0],this.hintList[hint][1], 'stoneRing.png');
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
    /*
    for (var traps in Assets.traps){
      //console.log(traps);
      this.addSprite(traps,Assets.traps[traps],48,48,10,10);
    }*/

    for (var traps in this.trapList){
      this.addSprite(this.trapList[traps].position[0], this.trapList[traps].position[1], this.trapList[traps].name,48,48,10,10);
    }
  }

  /**
   * This will move player to @position at it's own grid
   * @param position next position for player
   */
  setPlayer(position){
    this.position = position;
  }

  getPlayerPosition(){
    return this.position;
  }

}
