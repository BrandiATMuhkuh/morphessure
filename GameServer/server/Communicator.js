/**
 * Created by jbr134 on 26/03/15.
 */
'use strict';

/**
 * The connector and the single point of communication
 * Classes can register at the communicator which will
 * than propagate the same information to all registers
 */
class Communicator{

  constructor(){
    console.log("start Communicator");

    this.io = require('socket.io')();
    this.io.on('connection', (function (socket) {
      console.log("someone just connected to me", socket.id);
      this.socket = socket;
      this.start();

    }).bind(this));
    this.io.listen(3000);


  }


  /**
   * The master and communicator life in harmoney
   * this method will give the communicator the
   * power to talk directly to the master
   * @param master object of Master
   */
  setMaster(master){
    this.master = master;
    console.log("setMaster");
  }

  /**
   * Must be called after the first client connected to the socket
   */
  start(){
    console.log("start");

    /**
     * Client x tells server it wants to move
     * This practically means the client clicked
     * on a object
     */
    this.socket.on("client:movePlayer", (function(data){
      this.master.clientMovePlayer(data.name, data.hintNr);
    }).bind(this));

    /**
     * The client is asking for the current player list
     */
    this.socket.on("client:playerList", (function(){
      console.log("ask for player list");
      this.socket.emit("server:playerList", this.master.players); //will send message to the connector
    }).bind(this));

    /**
     * The client is asking for the current player list. This function will return the data directly
     * It is an abuse of socket.io and represent a REST call.
     */
    this.socket.on("client:getPlayerList", (function(fd){
      console.log("ask for player list");
      fd(this.master.players);
    }).bind(this));

    /**
     * Client asks for new level
     */
    this.socket.on("client:changeLevel", (function(level){
      this.master.serverGetLevel(level);
    }).bind(this));

    /**
     * A client is logging in
     */
    this.socket.on("client:signOn", (function(playerName){
      this.master.logIn(playerName);
      this.io.emit("server:playerList", this.master.players); //will send message to the connector
    }).bind(this));

    /**
     * Listens to what the participant said (The wizard selected) and if it was correct
     */
    this.socket.on("client:multiPartSaid", (function(data){
      this.master.clientMultiParticipantSaid(data.transmitter, data.receiver, data.correctness, data.answer, data.dictionary);
    }).bind(this));


    /**
     * Listens to the client when to generate a multiPlayerCondition
     */
    this.socket.on("client:generateMultiPlayerConditionDictionary", (function(data){
      this.master.clientGenerateMultiPlayerConditionDictionary();
    }).bind(this));

  }


  serverLevelChange(playerList, levelName){
    this.io.emit("server:levelChange", {playerList : playerList, levelName : levelName}); //Will send a broadcast to everyone
  }


  /**
   * Send a broadcast to all player and tells them that a player has moved
   * @param name who moves
   * @param hintNr where it moves
   */
  serverMovePlayer(name, hintNr){
    this.io.emit("server:movePlayer", {name : name, hintNr : hintNr}); //Will send a broadcast to everyone
  }


  /**
   * Send a broadcast who (transmitter) will talk to whom(receiver)
   * @param transmitter the person who will give the command
   * @param receiver the person who will receive the command
   * @param transmitterSays what the
   * @param receiverDict
   */
  serverWhoIsNext(transmitter, receiver, transmitterSays, receiverDict){
    var _next = {
      transmitter: transmitter,
      receiver: receiver,
      transmitterSays: transmitterSays,
      receiverDict: receiverDict
    };

    //console.log("serverWhoIsNext", _next);
    this.io.emit("server:whoIsNext", _next); //Will send a broadcast to everyone
  }
}



module.exports  = Communicator;
