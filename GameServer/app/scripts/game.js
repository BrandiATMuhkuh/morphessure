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


    //Load all tiles images in the cache
    for(var tile in Assets.tiles){
      this.game.load.image(Assets.tiles[tile], Assets.tilesPath+Assets.tiles[tile]);
    }

    //Load hints
    this.game.load.image(Assets.hint, Assets.hintPath+Assets.hint);

    //Load all taps images in the cache
    for(var tile in Assets.traps){
      this.game.load.image(Assets.traps[tile], Assets.trapsPath+Assets.traps[tile]+".png");
    }

  }

  create(){
    // setup game environment
    // scale, input etc..

    this.game.stage.backgroundColor = '#ca9a6c';
    console.log("game is created");

    this.game.world.setBounds(0, 0, 2000, 4000);

    /**
    //Add a hind
    this.game.add.sprite(0, 0, Assets.hint);
     */

    //Load all Game worlds
    var playerNr = 0;
    for (var player in this.players){
      this.players[player].renderWorld(playerNr, 8, 8);
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
    player.setGame(this.game);
    this.players[""+player.getName()]=player;
  }
}


