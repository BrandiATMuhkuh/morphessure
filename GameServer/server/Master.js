/**
 * Created by jbr134 on 26/03/15.
 */
'use strict';
var Communicator = require('./Communicator.js')
var Network = require('./Network.js')
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
    this.network = new Network();
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
    var next = this.network.getNext();
    var receiver = next.receiver;
    var transmitter = next.transmitter;

    //TODO This is a temporarily change who is next for 2 players
    //this will each between player 1 and 2 all the time
    /*
    transmitter = whoMoved.name;
    if(whoMoved.name==="player1"){
      receiver = "player2";
    }else{
      receiver = "player1";
    }*/



    var player = this.getPlayer(receiver);

    var _nextDict = this.getDictAtPosition(player, player.position+1);
    if(_nextDict != null){
      this.communicator.serverWhoIsNext(transmitter, receiver, _nextDict[0],_nextDict);
    }else{
      console.log("game is over")
    }
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
   * This will return the dictionary at position x. Normally used to find next trap.
   * Position 0 is always the correct answer
   * @param player the player with the trap list
   * @param position the position of the trap
   * @returns {*} turns the found trap or NULL
   */
  getDictAtPosition(player, position){

    if(player.hintWord[position]){
      return player.hintWord[position];
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
