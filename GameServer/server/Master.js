/**
 * Created by jbr134 on 26/03/15.
 */
'use strict';
var Communicator = require('./Communicator.js')
/**
 * This class will handle all the logic for the game
 */
class Master{

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
}

module.exports  = Master;
