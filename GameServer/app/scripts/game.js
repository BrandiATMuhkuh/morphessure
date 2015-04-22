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



    //Add server listeners
    //add a server whos is next listener to move the camera
    comm.addServerWhoIsNext((function(data){
      this.serverWhoIsNext(data.receiver);
    }).bind(this));
  }

  /**
   * All the stuff that needs to be loaded before we can start playing.
   * Mainly assets
   */
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

    //Load animated player
    this.game.load.atlasJSONHash('player', 'assets/base_pack/Player/p1_walk/p1_walk.png', 'assets/base_pack/Player/p1_walk/p1_walk.json');


    //Receive commands from server
    comm.setMaster(this);

  }

  /**
   * This will destroy the object and close all references.
   * This is needed otherwhise the garbage collector will not
   * collect his garbage
   */
  onShutDownCallback(){
    console.log("I'm shut down");
    this.game = {};
    this.cursors = null;
    this.tileArray = null;
    this.players = [];//This will contain all players
    delete this;
  }

  /**
   * Create the game itself. E.g. the game world and players and so on
   */
  create(){
    // setup game environment
    // scale, input etc..

    this.game.stage.backgroundColor = '#ca9a6c';
    console.log("game is created");

    this.game.world.setBounds(-100, -100, 2000, 1000);


    //Load all Game worlds, hints, and traps
    var playerNr = 0;
    for (var player in this.players){
      this.players[player].renderWorld(playerNr, 10, 10);
      this.players[player].renderHints();
      this.players[player].renderTraps();
      this.players[player].renderPlayer();
      playerNr = playerNr + 1;
    }

    this.cursors = this.game.input.keyboard.createCursorKeys();
  }

  /**
   * This method runs in a loop and updates whatever should happen
   */
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
    //console.log("addPlayer: "+player.getName());
    player.setGame(this.game);
    this.players[""+player.getName()]=player;
  }

  /**
   * Set player x as next player
   * Moves attention to player x
   *
   * @param nextPlayer who is next player
   */
  serverWhoIsNext(nextPlayer){
    console.log("serverWhoIsNext", nextPlayer);

    var _currPlayer = null;

    //Find next player and activate it
    for(var player in this.players){
      if(this.players[player].name === nextPlayer){
        _currPlayer = this.players[player];
        break; //stops loop since player was found
      }
    }

    //do things with the map and the player if player is not null
    if(_currPlayer !== null){
      _currPlayer.setIsPlaying(true); //Set the player to playing mode

      //Set camera to current player position
      this.game.add.tween(this.game.camera).to({
        x: _currPlayer.player.x - 100,
        y: _currPlayer.player.y - 100
      }, 1000, Phaser.Easing.Linear.None, true, 0, 0, false);

    }
  }
}


