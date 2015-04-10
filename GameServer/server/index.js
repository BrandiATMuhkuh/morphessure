/**
 * Create the DB connection and does db I/O
 */
'use strict';
var Master = require('./Master.js');

var config = {
  players : [
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
  ]
}



new Master(config);

console.log('Start Server');

/*
class Database {

  constructor (dbAddress, dbPort){
    console.log(dbAddress + " " + dbPort);
  }

  getScene(sceneNr){

    return sceneNr
  }

}*/

//var myDb = new Database("12343", 163);
//console.log(myDb.getScene(15));

//module.exports  = io;
