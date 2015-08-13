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


/**
 * This class will handle all the logic for the game
 */
class Master{

  /**
   * The constructor needs a configFile with all players and the game world, plus words used
   * @param configFiles
   * @param pId
   * @param robotAddress
   * @param robotPort
   */
  constructor(configFiles, pId, robotAddress, robotPort){
    this.pId = pId;
    this.robotAddress = robotAddress;
    this.robotPort = robotPort;
    this.db = new DB(this);
    this.communicator = new Communicator();
    this.communicator.setMaster(this);
    this.settings = configFiles;
    this.condition = new Condition(this.settings.identification.conditionId, this.settings.identification.condition, this.settings.identification.description);

    this.players = this.settings.players;
    this.levels = this.settings.levels;
    this.network = new Network(this.levels);
    this.currentLevel = null;
    this.naoComm = new NaoComm(this.robotAddress, this.robotPort);

    this.lastMoves = [];


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

    console.log("logIn", playerName);
  }

  /**
   * Client tells server where it wants to move
   * @param name name of person who want to move
   * @param hintNr where to move
   * @param option 1 == init, 2 == multiPlayer, 3 == coming from the client
   */
  clientMovePlayer(name, hintNr, option){
    hintNr = parseInt(hintNr);
    console.log("client:movePlayer", name, hintNr, option);

    

    var player = this.getPlayer(name);
    var goNext = player.position+1 === hintNr;
    console.log(goNext, player.position+1, hintNr, this.levels[this.currentLevel].type !== "single");

    this.db.saveLog(new LogPlayerMoves(
        this.pId,
        this.condition.conditionId,
        this.condition.condition,
        this.currentLevel,
        player.name,
        hintNr,
        [-1,-1], //check this later
        "symbolName"
        ));

    if((this.levels[this.currentLevel].type === "single" && option === 1) || this.levels[this.currentLevel].type !== "single"){
      this.communicator.serverRAMove(false);
      if(goNext || (option == 1)){
        this.lastMoves.push({name:name, hintNr:hintNr});

        //update players on the server
        this.updatePlayerPosition(name, hintNr);
        this.communicator.serverMovePlayer(name, hintNr);

        //Wait a bit so the player can see that his/her character moved
        //before the camera will move
        //this.tellClientswhoIsNext();

        setTimeout(function() {
          this.tellClientswhoIsNext();
        }.bind(this), 300);
      }else{
        //player clicked on the wrong symbol. 
        if(this.levels[this.currentLevel].type === "single"){
          this.communicator.serverTryAgain();
        }
        
      }
    }else{
      //wait for alia
      console.log("wait for RA");
      if(!goNext){
        this.communicator.serverTryAgain();
      }else{
        this.communicator.serverRAMove(true);
      }
      
    }

    
  }

  /**
   * This method will determine who is next.
   * This is easy with 2 players but a bit more complex
   * if we have a bigger network and the network is not random
   */
  tellClientswhoIsNext(){
    var next = this.network.getNext();
    if(next === null){
      return;
    }
    var receiver = next.receiver;
    var transmitter = next.transmitter;

    var player = this.getPlayer(receiver);

    var _nextDict = this.getDictAtPosition(player, player.position+1);
    if(_nextDict != null){
      //console.log(transmitter, receiver, _nextDict[0],_nextDict);

      var tplayer = this.getPlayer(transmitter);
      this.db.saveLog(new LogPlayerShouldSay(
        this.pId,
        this.condition.conditionId,
        this.condition.condition,
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
          this.naoComm.start();
          if(tplayer.talk.lookUpDown){
            this.naoComm.lookUp(true);
          }
          this.naoComm.say(tplayer.talk.goTo.replace("?word?", _nextDict[0]));
          this.naoComm.finish().send();
          //this.naoComm.say(tplayer.talk.goTo.replace("?word?", _nextDict[0]));
          //this.tellClientswhoIsNext();
          //clientMultiParticipantSaid(transmitter, receiver, correctness, answer, dictionary)
        }.bind(this), 300);
      }
      console.log("next: ", transmitter, receiver);


    }else{
      this.communicator.serverGameOver();
      console.log("game is over", player.position+1);
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
   * Will return a random object from an array
   * @param inputArray random object. NUll if array is null
   */
  selectRandomArrayObject(inputArray){

    if(inputArray === undefined || inputArray === null || inputArray.length <= 0){
      return null
    }
    /**
     * Returns a random integer between min (inclusive) and max (inclusive)
     * Using Math.round() will give you a non-uniform distribution!
     * Source: http://stackoverflow.com/questions/1527803/generating-random-numbers-in-javascript-in-a-specific-range
     */
    return inputArray[Math.floor(Math.random() * (inputArray.length))];



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
      this.condition.conditionId,
      this.condition.condition,
      this.currentLevel,
      player.name,
      receiver,
      answer,
      correctness
    ));



    /*
    if(correctness === 0 || this.levels[this.currentLevel].type === "single"){ // 0 is correct


    }else if(correctness === 1){ // 1 is wrong

    }else{// -1 could not be found

    }*/

    var player = this.getPlayer(receiver);
    if(player.type === "robot"){

      if(correctness === -2){
        //Participant want to go to a wrong tile
        //this.communicator.serverTryAgain();

        console.log("I donw want");

        this.naoComm.start();
        this.naoComm.say("I don't want to go their!");
        this.naoComm.finish().send();

      }else{
        //Say what you do.
        this.naoComm.start();
        if(player.talk.lookUpDown){
          this.naoComm.lookUp(false);
        }

        if(player.talk.handMovement && this.levels[this.currentLevel].type !== "single"){
          this.naoComm.moveHand();
        }

        if(correctness === -1){
          this.naoComm.say("OK");
        }else{
          this.naoComm.say(this.selectRandomArrayObject(player.talk.acknowledge).replace("?word?", answer));
        }

        this.naoComm.finish().send();

        setTimeout(function() {
          console.log("clientMovePlayer -- A");
          this.clientMovePlayer(player.name, player.position+1, 1);
        }.bind(this), 1000);
      }

      
    }else{
      console.log("clientMovePlayer -- B");
      this.clientMovePlayer(player.name, player.position+1);
    }

  }

  /**
   * This function will return via callback a level
   * @param resFunc
   */
  serverGetLevel(level){
    console.log("please give me my level", level);
    this.naoComm.start().initSit().finish().send();
    if(this.currentLevel !== level){
      this.lastMoves = [];
      this.lastMoves.push({name:"player1", hintNr:"0"});
      this.lastMoves.push({name:"player2", hintNr:"0"});
    }

    this.currentLevel = level;
    this.network.resetNetwork(this.currentLevel);
    //Reset players position and who is playing
    //leave logged in

    //if level is a single player level turn the robot silent
    if(this.levels[this.currentLevel].type === "single"){
      this.naoComm.start().volume(0).finish().send();
    }else{
      this.naoComm.start().volume(50).finish().send();
    }

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

    this.communicator.serverLevelChange(this.players, this.currentLevel, this.levels[this.currentLevel].type);

  }

  /**
   * The client asks for initialization
   */
  clientInit(){
    //this.clientMovePlayer(this.lastMove.name, this.lastMove.hintNr);
    console.log("client init");
    console.log(this.lastMoves);
    var beforeLast = this.lastMoves.length -2;
    var last = this.lastMoves.length -1;

    if(last>=0 && beforeLast>=0){
      console.log("clientMovePlayer -- C");
      this.clientMovePlayer(this.lastMoves[beforeLast].name, this.lastMoves[beforeLast].hintNr, 1);
      setTimeout(function() {
        console.log("clientMovePlayer -- D");
        this.clientMovePlayer(this.lastMoves[last].name, this.lastMoves[last].hintNr, 1);
        //Send Start Counter
        //if client is not single
        if(this.levels[this.currentLevel].type !== "single"){
          this.communicator.serverResetCounter();
        }else{
          //this.communicator.serverResetCounter()
        }
      }.bind(this), 1000);
    }


    console.log(beforeLast, last);
    //this.tellClientswhoIsNext();
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
