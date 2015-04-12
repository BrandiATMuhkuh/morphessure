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

    //Wait a bit so the player can see that his/her character moved
    //before the camera will move
    setTimeout(function() {
      this.whoIsNext(moveTo);
    }.bind(this), 3000);
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

    var player = this.getPlayer(next);
    console.log("hint", this.getTrapAtPosition(player, player.position+1));


    this.communicator.serverWhoIsNext(next);
  }

  /**
   * Finds and return player that has @playerName
   * @param playerName the name of the player you want to find
   * @returns {*} return found player or NULL
   */
  getPlayer(playerName){
    for(var player in this.players){
      if(this.players[player].name===playerName){
        return this.players[player];
      }
    }

    return null;
  }

  /**
   * This will return the trap at position x. Normally used to find next trap.
   * @param player the player with the trap list
   * @param position the position of the trap
   * @returns {*} turns the found trap or NULL
   */
  getTrapAtPosition(player, position){
      for(var trap in player.trapList){
        if(player.hintList[position] !== undefined &&
          player.trapList[trap].position[0] === player.hintList[position][0] &&
          player.trapList[trap].position[1] === player.hintList[position][1]){
          return player.trapList[trap];
        }
      }
    return null;
  }


  /**
   * Update the position of the player
   * @param playerName name of the player
   * @param hintNr the hint position
   */
  updatePlayerPosition(playerName, hintNr){
    for(var player in this.players){
      if(this.players[player].name===playerName){
        this.players[player].position = parseInt(hintNr);
      }
    }
  }

}

module.exports = Master;
