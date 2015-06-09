/**
* This class does all the communication between the server and NAO
*/
'use strict';
var request = require('request');
module.exports = class NaoComm {

  constructor(){

  }

  say(text){
    console.log("Nao should say:", text);
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
}
