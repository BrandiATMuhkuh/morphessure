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
      this.master.clientMovePlayer(data);
    }).bind(this));

    /**
     * The client is asking for the current player list
     */
    this.socket.on("client:playerList", (function(){
      console.log("ask for player list");
      this.socket.emit("server:playerList", this.master.players); //will send message to the connector
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
      console.log("client:multiPartSaid", data);
    }).bind(this));
  }


  /**
   * Send a broadcast to all player and tells them that a player has moved
   * @param moveTo new Position of player X
   */
  serverMovePlayer(moveTo){
    this.io.emit("server:movePlayer", moveTo); //Will send a broadcast to everyone
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

    console.log("serverWhoIsNext", _next);
    this.io.emit("server:whoIsNext", _next); //Will send a broadcast to everyone
  }
}



module.exports  = Communicator;
