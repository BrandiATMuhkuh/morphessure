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
        type: "human"
      },

      {
        pNumber: -1,
        name: "player2",
        realName: "Nao",
        type: "robot"
      }
    ];
  }
}

module.exports  = new Master();
