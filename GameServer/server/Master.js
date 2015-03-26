/**
 * Created by jbr134 on 26/03/15.
 */
'use strict';

class Master{

  constructor(){
    this.communicator = require('./Communicator.js');
    this.communicator.setMaster(this);
    this.players = [
      {
        pNumber: 153,
        name: "player1",
        realName: "Brandy",
        type: "human",
        isLoggedOn: false
      },

      {
        pNumber: -1,
        name: "player2",
        realName: "Nao",
        type: "robot",
        isLoggedOn: false
      }
    ];
  }

  logIn(playerName){

    for(var player in this.players){
      if(this.players[player].name === playerName){
        this.players[player].isLoggedOn = true;
      }
    }

    console.log("logIn", playerName, this.players);
  }
}

module.exports  = new Master();
