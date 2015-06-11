/**
* This class does all the communication between the server and NAO
*/
'use strict';
var request = require('request');
module.exports = class NaoComm {

  constructor(){
    this.lastRequest = "Nothing to say";
  }

  say(text){
    console.log("Nao should say:", text);

    this.lastRequest = text;

    request('http://localhost:5000/say',
            {
              method: "POST",
              json: true,
              body: {say: ""+text}
            },
            function(err, res, body) {
      // `body` is a js object if request was successful
    });
  }

  /**
  * Repeats the last thing nao said
  */
  repeat(){
    this.say(this.lastRequest);
  }
}
