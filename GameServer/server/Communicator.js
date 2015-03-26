/**
 * Created by jbr134 on 26/03/15.
 */
'use strict';

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



  setMaster(master){
    this.master = master;
    console.log("setMaster");
  }

  start(){
    console.log("start");

    this.socket.on("client:movePlayer", (function(data){
      console.log("client:movePlayer", data);
      this.io.emit("server:movePlayer", data); //Will send a broadcast to everyone
    }).bind(this));

    this.socket.on("client:playerList", (function(){
      console.log("ask for player list");
      this.socket.emit("server:playerList", this.master.players); //will send message to the connector
    }).bind(this));

    this.socket.on("client:signOn", (function(playerName){

      this.master.logIn(playerName);
    }).bind(this));
  }

}

module.exports  = new Communicator();
