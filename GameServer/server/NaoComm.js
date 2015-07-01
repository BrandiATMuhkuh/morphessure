/**
* This class does all the communication between the server and NAO
*/
'use strict';
var request = require('request');
var net = require('net');
module.exports = class NaoComm {

  constructor(address, port){
    this.lastRequest = "Nothing to say";
    this.address = (typeof address === 'undefined')? "localhost":address;
    this.port = (typeof port === 'undefined')? 50016:port;
  }

  say(text){
    console.log("Nao should say:", text);

    this.lastRequest = text;

    var client = new net.Socket();
    client.connect(this.port, this.address, function() {
      console.log('Connected');
      client.write('say='+text);
    });

    client.on('close', function() {
      console.log('Connection closed');
    });


  }

  /**
  * Repeats the last thing nao said
  */
  repeat(){
    this.say(this.lastRequest);
  }
}
