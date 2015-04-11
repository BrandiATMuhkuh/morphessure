/**
 * Created by jbr134 on 26/03/15.
 */
'use strict';
var Communicator = require('./Communicator.js')
/**
 * This class will handle all the logic for the game
 */
class Master{

  /**
   * The constructor needs a configFile with all players and the game world, plus words used
   * @param configFiles
   */
  constructor(configFiles){
    this.communicator = new Communicator();
    this.communicator.setMaster(this);
    this.players = configFiles.players;
  }

  /**
   * Tell server what player has logged in
   * @param playerName
   */
  logIn(playerName){

    for(var player in this.players){
      if(this.players[player].name === playerName){
        this.players[player].isLoggedOn = true;
      }
    }

    console.log("logIn", playerName, this.players);
  }

  /**
   * Client tells server where it wants to move
   * @param moveTo
   */
  clientMovePlayer(moveTo){
    console.log("client:movePlayer", moveTo);

    //update players on the server
    this.updatePlayerPosition(moveTo.name, moveTo.hintNr);
    this.communicator.serverMovePlayer(moveTo);
    this.whoIsNext(moveTo);
  }

  /**
   * This method will determine who is next.
   * This is easy with 2 players but a bit more complex
   * if we have a bigger network and the network is not random
   * @param whoMoved contains the player who just moved.
   */
  whoIsNext(whoMoved){
      var next = null;

    //TODO This is a temporarily change who is next for 2 players
    //this will each between player 1 and 2 all the time
    if(whoMoved.name==="player1"){
      next = "player2";
    }else{
      next = "player1";
    }


    this.communicator.serverWhoIsNext(next);
  }


  /**
   * Update the position of the player
   * @param playerName name of the player
   * @param hintNr the hint position
   */
  updatePlayerPosition(playerName, hintNr){
    for(var player in this.players){
      if(this.players[player].name===playerName){
        this.players[player].position = this.players[player].hintList[hintNr];
      }
    }
  }

}

module.exports = Master;
