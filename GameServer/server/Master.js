/**
 * Created by jbr134 on 26/03/15.
 */
'use strict';
var DB = require('./DB.js');
var ConditionDictionaryGenerator = require('./ConditionDictionaryGenerator.js');
var Communicator = require('./Communicator.js')
var Network = require('./Network.js')
var DbClasses = require('./DbClasses.js');
var NaoComm = require('./NaoComm.js');
var LogPlayerSaid = DbClasses.LogPlayerSaid;
var LogPlayerShouldSay = DbClasses.LogPlayerShouldSay;
var LogPlayerMoves = DbClasses.LogPlayerMoves;
var Condition = DbClasses.Condition;
var condition = new Condition(1, "OneRobotOneHumanNoMirror", "the robot will play without any special extras. eg. no gazing, mirroroing, ...");

/**
 * This class will handle all the logic for the game
 */
class Master{

  /**
   * The constructor needs a configFile with all players and the game world, plus words used
   * @param configFiles
   * @param pId
   */
  constructor(configFiles, pId){
    this.pId = pId;
    this.db = new DB(this);
    this.communicator = new Communicator();
    this.network = new Network(configFiles.networks);
    this.communicator.setMaster(this);
    this.players = configFiles.players;
    this.levels = configFiles.levels;
    this.currentLevel = null;
    this.naoComm = new NaoComm();

    //this.db.populatePlayers();
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

    var player = this.getPlayer(name);

    this.db.saveLog(new LogPlayerMoves(
      this.pId,
      condition.conditionId,
      condition.condition,
      this.currentLevel,
      player.name,
      hintNr,
      [-1,-1], //check this later
      "symbolName"
      ));


    this.communicator.serverMovePlayer(name, hintNr);

    //Wait a bit so the player can see that his/her character moved
    //before the camera will move
    //this.tellClientswhoIsNext();

    setTimeout(function() {
      this.tellClientswhoIsNext();
    }.bind(this), 3000);
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
      //console.log(transmitter, receiver, _nextDict[0],_nextDict);

      var tplayer = this.getPlayer(transmitter);
      this.db.saveLog(new LogPlayerShouldSay(
        this.pId,
        condition.conditionId,
        condition.condition,
        this.currentLevel,
        tplayer.name,
        receiver,
        _nextDict[0]
      ));


      this.communicator.serverWhoIsNext(transmitter, receiver, _nextDict[0],_nextDict);
      //If it's the player2's turn, the robot will automatically say the word
      if(tplayer.type == "robot" ){
        console.log("time for robot to say who is next");
        setTimeout(function() {
          this.naoComm.say("Go to the "+_nextDict[0]+"!");
          //this.tellClientswhoIsNext();
          //clientMultiParticipantSaid(transmitter, receiver, correctness, answer, dictionary)
        }.bind(this), 1500);
      }
      console.log("next: ", transmitter, receiver);


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

    var player = this.getPlayer(transmitter);
    this.db.saveLog(new LogPlayerSaid(
      this.pId,
      condition.conditionId,
      condition.condition,
      this.currentLevel,
      player.name,
      receiver,
      answer,
      correctness
    ));


    if(correctness === 0){ // 0 is correct

      var player = this.getPlayer(receiver);
      if(player.type === "robot"){
        //Say what you do.
        this.naoComm.say(player.acknowledgeWord.replace("?word?", answer));
        setTimeout(function() {
          this.clientMovePlayer(player.name, player.position+1);
        }.bind(this), 1500);
      }else{
        this.clientMovePlayer(player.name, player.position+1);
      }


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
    this.currentLevel = level;
    this.network.resetNetwork(this.currentLevel);
    //Reset players position and who is playing
    //leave logged in



    //replace players lists
    var clevel = this.levels[this.currentLevel].fields;
    for(let ole in clevel){
      console.log(clevel[ole].playerName);
      let playerLevel = clevel[ole];
      let p = this.getPlayer(playerLevel.playerName);
      p.position = 1;
      p.trapList = playerLevel.trapList;
      p.hintList = playerLevel.hintList;
      p.hintWord = playerLevel.hintWord;
    }

    this.communicator.serverLevelChange(this.players, this.currentLevel);

  }


  clientGenerateMultiPlayerConditionDictionary(){
    console.log("clientGenerateMultiPlayerConditionDictionary");
    new ConditionDictionaryGenerator(this).generate().then(function(response){
      console.log("clientGenerateMultiPlayerConditionDictionaryPROMIS", response);

      //take the

    }).catch(function(response){
      console.error(response);
    });

    //After generation is done. load the level
    //this.serverGetLevel("multiPlayer");
  }

}

module.exports = Master;
