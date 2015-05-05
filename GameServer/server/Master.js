/**
 * Created by jbr134 on 26/03/15.
 */
'use strict';
var DB = require('./DB.js');
var Communicator = require('./Communicator.js')
var Network = require('./Network.js')
var DbClasses = require('./DbClasses.js');
var LogPlayerSay = DbClasses.LogPlayerSay;
var LogPlayerMoves = DbClasses.LogPlayerMoves;
var Condition = DbClasses.Condition;
/**
 * This class will handle all the logic for the game
 */
class Master{

  /**
   * The constructor needs a configFile with all players and the game world, plus words used
   * @param configFiles
   */
  constructor(configFiles){
    this.db = new DB(this);
    this.communicator = new Communicator();
    this.network = new Network();
    this.communicator.setMaster(this);
    this.players = [];
    //this.levels = configFiles.levels;

    this.db.populatePlayers();
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
   * @param name name of person who want to move
   * @param hintNr where to move
   */
  clientMovePlayer(name, hintNr){
    console.log("client:movePlayer", name, hintNr);

    //update players on the server
    this.updatePlayerPosition(name, hintNr);

    var condition = new Condition(1, "OneRobotOneHumanNoMirror", "the robot will play without any special extras. eg. no gazing, mirroroing, ...");
    var player = this.getPlayer(name);

    this.db.saveLog(new LogPlayerMoves(
      player.pId,
      condition.conditionId,
      condition.condition,
      player.name,
      hintNr,
      [-1,-1], //check this later
      "symbolName"
      ));


    this.communicator.serverMovePlayer(name, hintNr);

    //Wait a bit so the player can see that his/her character moved
    //before the camera will move
    this.tellClientswhoIsNext();
    /*
    setTimeout(function() {
      this.tellClientswhoIsNext();
    }.bind(this), 3000);*/
  }

  /**
   * This method will determine who is next.
   * This is easy with 2 players but a bit more complex
   * if we have a bigger network and the network is not random
   */
  tellClientswhoIsNext(){
    var next = this.network.getNext();
    var receiver = next.receiver;
    var transmitter = next.transmitter;

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

  /**
   * This is the answer the wizard (receiver) got from the participant (receiver)
   * @param transmitter name of the players who said something
   * @param receiver name of the player who received the command
   * @param correctness was the answer correct (-1 could not be found, 0 is correct, 1 is wrong)
   * @param answer what was the actual answer
   * @param dictionary the dictionary in which we look in.
   */
  clientMultiParticipantSaid(transmitter, receiver, correctness, answer, dictionary){
    console.log("clientMultiParticipantSaid", transmitter, receiver, correctness, answer, dictionary);


    if(correctness === 0){ // 0 is correct

      var player = this.getPlayer(receiver);
      console.log(player);
      this.clientMovePlayer(player.name, player.position+1);

    }else if(correctness === 1){ // 1 is wrong

    }else{// -1 could not be found

    }

  }

  /**
   * This function will return via callback a level
   * @param resFunc
   */
  serverGetLevel(level){
    console.log("please give me my level", level);
    this.network.resetNetwork();
    //Reset players position and who is playing
    //leave logged in


    this.db.getLevel(level, "OneRobotOneHumanNoMirror", function(data){
      console.log("here is some callback");

      for(let pl in data){
        console.log(pl);
        let p = this.getPlayer(pl);
        p.position = 1;
        p.trapList = data[pl].trapList;
        p.hintList = data[pl].hintList;
        p.hintWord = data[pl].hintWord;
      }

      this.communicator.serverLevelChange(this.players, level);

    }.bind(this));





  }


}

module.exports = Master;
