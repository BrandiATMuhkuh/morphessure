/**
 * Created by jbr134 on 26/03/15.
 */
'use strict';

/**
 * This class will handle all the logic for the game
 */
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
        isLoggedOn: false,
        trapList : [
          {
            position: [0,0],
            name: 'belly'
          },
          {
            position: [1,1],
            name: 'thief'
          },
          {
            position: [2,1],
            name: 'cup'
          },
          {
            position: [2,2],
            name: 'flag'
          }
        ],
        hintList : [[0,0],[1,1], [2,1]]
      },

      {
        pNumber: -1,
        name: "player2",
        realName: "Nao",
        type: "robot",
        isLoggedOn: false,
        trapList : [
          {
            position: [0,0],
            name: 'alligator'
          },
          {
            position: [1,1],
            name: 'beans'
          },
          {
            position: [2,1],
            name: 'RAM'
          },
          {
            position: [2,2],
            name: 'beetle'
          }
        ],
        hintList : [[0,0],[1,1], [2,1]]
      },

      {
        pNumber: 0,
        name: "Researcher",
        realName: "Researcher",
        type: "researcher",
        isLoggedOn: false,
        trapList : [],
        hintList : []
      }
    ];
  }

  /**
   * Tell server what player has logged in
   * @param playerName
   */
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
