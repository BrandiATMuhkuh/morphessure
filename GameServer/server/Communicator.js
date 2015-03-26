/**
 * Created by jbr134 on 26/03/15.
 */
'use strict';

class Communicator{

  constructor(){

    console.log("start Communicator");

    var io = require('socket.io')();
    io.on('connection', (function (socket) {
      console.log("someone just connected to me");
      this.socket = socket;
      this.start();
      /*
      socket.emit('news', { hello: 'world' });
      socket.on('my other event', function (data) {
        console.log(data);
      });*/
    }).bind(this));




    io.listen(3000);
  }

  start(){
    console.log("start");

    this.socket.on("movePlayer", function(data){
      console.log("movePlayer", data);
    });

  }

}

module.exports  = new Communicator();
