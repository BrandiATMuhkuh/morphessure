/**
* This class does all the communication between the server and NAO
*/
'use strict';
var request = require('request');
var net = require('net');
module.exports = class NaoComm {

  constructor(address, port){
    this.address = (typeof address === 'undefined')? "localhost":address;
    this.port = (typeof port === 'undefined')? 50016:port;
    this.sendCommand = 'say=' + "Nothing to say" + '&';
  }

  /**
   * Set what robot says
   * @param text
   */
  say(text){
    this.sendCommand = this.sendCommand + 'say=' + text + '&'
    console.log("Nao should say:", text);
    return this;
  }

  /**
   * Tell robot to look up or down
   * @param up true/false
   */
  lookUp(up){
    this.sendCommand = this.sendCommand + 'lookUp=' + up + '&'
    console.log("Robot look:", up);
    return this;
  }

  /**
   * set the volume of the robot
   * @param vol 0-100
   */
  volume(vol){
    this.sendCommand = this.sendCommand + 'volume=' + vol + '&'
    console.log("Robot volume:", vol);
    return this;
  }


  /**
   * will move robots hand randomly
   */
  moveHand(){
    this.sendCommand = this.sendCommand + 'moveHand=' + true + '&'
    console.log("Robot moves hand");
    return this;
  }

  /**
   * Robot initialices sit position
   */
  initSit(){
    this.sendCommand = this.sendCommand + 'initSit=' + true + '&'
    console.log("Robot inits sitting");
    return this;
  }

  start(){
    this.sendCommand = "";
    return this;
  }

  send(){
    var client = new net.Socket();
    client.on('error', function(e){
      console.error("I could not connect to NAO. I guess the behavior is not running or NAO is not durned on!");
    });

    client.connect(this.port, this.address, function () {
      console.log('Connected');
      client.write(this.sendCommand);
    }.bind(this));

    client.on('close', function () {
      console.log('Connection closed');
    });
  }

  /**
  * Repeats the last thing nao said
  */
  repeat(){
    this.send();
  }
}
