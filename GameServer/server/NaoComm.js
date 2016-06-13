/**
* This class does all the communication between the server and NAO
*/
'use strict';
var request = require('request');
var net = require('net');
module.exports = class NaoComm {

  constructor(address, port){
    //this.address = (typeof address === 'undefined')? "localhost":address;
    this.address = address;
    //this.address = "dontusethisrobot.canterbury.ac.nz";
    this.port = (typeof port === 'undefined')? 50016:port;
    //this.port = 40010;
    this.sendCommand = 'say=' + "Nothing to say" + '&';
    this.isClosed = true;
    this.sendCommands = [];
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
    this.sendCommand = this.sendCommand + 'lookUp=' + up + '&';
    console.log("Robot look:", up);
    return this;
  }

  /**
   * set the volume of the robot
   * @param vol 0-100
   */
  volume(vol){
    this.sendCommand = this.sendCommand + 'volume=' + vol + '&';
    console.log("Robot volume:", vol);
    return this;
  }


  /**
   * will move robots hand randomly
   */
  moveHand(){
    this.sendCommand = this.sendCommand + 'moveHand=' + true + '&';
    console.log("Robot moves hand");
    return this;
  }

  /**
   * Robot initialices sit position
   */
  initSit(){
    this.sendCommand = this.sendCommand + 'initSit=' + true + '&';
    console.log("Robot initSit");
    return this;
  }

  /**
  * Robot start the trust me behavior
  */
  trustgame(){
    this.sendCommand = this.sendCommand + 'trustgame=' + true + '&';
    console.log("Robot trustgame");
    return this;
  }

  start(){
    this.sendCommand = "";
    return this;
  }

  finish(){
    this.sendCommands.unshift(""+this.sendCommand);
    return this;
  }

  send(){

    console.log("nao send", this.isClosed, this.sendCommands.length);

    var useSocket = false; //define if we use socket of http to send a request to nao

    //If socket is true we send the request via socket
    if(useSocket === true){
      if(this.isClosed && this.sendCommands.length > 0 && this.address !== undefined){
        this.isClosed = false;
        var client = new net.Socket();
        client.on('error', function(e){
          console.error("I could not connect to NAO. I guess the behavior is not running or NAO is not durned on!");
        });

        client.connect(this.port, this.address, function () {
          console.log('Connected');

          client.write(this.sendCommands.pop());
        }.bind(this));

        client.on('close', function () {
          this.isClosed = true;
          console.log('Connection closed');
          this.send();
        }.bind(this));
      }
    }else{
      //send the request via HTTP-rest
      var _req = 'http://'+this.address+":"+this.port+"?"+this.sendCommands.pop();
      console.log("The request", _req);
      request(_req, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          console.log(body) // Show the HTML for the Google homepage.
        }
      })
    }



  }

  /**
  * Repeats the last thing nao said
  */
  repeat(){
    this.sendCommands.unshift(""+this.sendCommand);
    this.send();
  }
}
