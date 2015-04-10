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
