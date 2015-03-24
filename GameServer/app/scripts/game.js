/**
 * Created by jbr134 on 24/03/15.
 */
'use strict';

class Game {

  constructor(game){
    this.game = game;
    this.cursors = null;
    this.tileArray = null;
    this.players = [];//This will contain all players
  }

  preload(){
    // load preloader assets


    //Load all images int the cache
    for(var tile in Assets.tiles){
      this.game.load.image(Assets.tiles[tile], 'assets/base_pack/Spritesheet/'+Assets.tiles[tile]);
    }

    //Load hints
    this.game.load.image(Assets.hint, Assets.hintPath+Assets.hint);

  }

  create(){
    // setup game environment
    // scale, input etc..

    this.game.stage.backgroundColor = '#ca9a6c';
    console.log("game is created");

    this.game.world.setBounds(0, 0, 2000, 4000);

    /**
    //Create background images
    for (var topLeft = 0; topLeft < 30; topLeft = topLeft +1){

      var offSet = topLeft*107;

      for(var rightOff = 0; rightOff < 30; rightOff = rightOff +1){
        this.game.add.sprite(66*rightOff, offSet, Assets.tiles[Math.floor(Math.random()*Assets.tiles.length)]);
      }

      for(var rightOff = 0; rightOff < 30; rightOff = rightOff +1){
        this.game.add.sprite(66*rightOff-65/2, offSet+53, Assets.tiles[Math.floor(Math.random()*Assets.tiles.length)]);
      }
    }

    //Add a hind
    this.game.add.sprite(0, 0, Assets.hint);
     */

    //Load all Game worlds
    var playerNr = 0;
    for (var player in this.players){
      console.log(player);
      this.players[player].renderWorld(playerNr, this.game, 8, 8);
      playerNr = playerNr + 1;
    }

    this.cursors = this.game.input.keyboard.createCursorKeys();
  }

  update(){
    if (this.cursors.up.isDown)
    {
      this.game.camera.y -= 4;
    }
    else if (this.cursors.down.isDown)
    {
      this.game.camera.y += 4;
    }

    if (this.cursors.left.isDown)
    {
      this.game.camera.x -= 4;
    }
    else if (this.cursors.right.isDown)
    {
      this.game.camera.x += 4;
    }
  }

  /**
   * This will add a player to the Game
   * @param player
   */
  addPlayer(player){
    console.log("addPlayer: "+player.getName());
    this.players[""+player.getName()]=player;
  }
}


