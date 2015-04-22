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
      position: 0,
      isPlaying: true,
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
        },
        {
          position: [2,3],
          name: 'flag'
        },
        {
          position: [2,4],
          name: 'flag'
        },
        {
          position: [2,5],
          name: 'flag'
        },
        {
          position: [2,6],
          name: 'flag'
        },
        {
          position: [2,7],
          name: 'flag'
        }
      ],
      hintList : [[0,0],[1,1], [2,1], [2,2], [2,3], [2,4], [2,5], [2,6], [2,7]],
      hintWord : [
        ['Belly','Stomach','Fat Man'],
        ['Thief','Robberer','Money Transporter'],
        ['Cup',"Mug"],
        ['Flag', 'Sign', 'Golfflag'],
        ['Flag', 'Sign', 'Golfflag'],
        ['Flag', 'Sign', 'Golfflag'],
        ['Flag', 'Sign', 'Golfflag'],
        ['Flag', 'Sign', 'Golfflag'],
        ['Flag', 'Sign', 'Golfflag']
      ]

    },

    {
      pNumber: -1,
      name: "player2",
      realName: "Nao",
      type: "robot",
      isLoggedOn: false,
      position: 0,
      isPlaying: false,
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
        },
        {
          position: [2,3],
          name: 'flag'
        },
        {
          position: [2,4],
          name: 'flag'
        },
        {
          position: [2,5],
          name: 'flag'
        },
        {
          position: [2,6],
          name: 'flag'
        },
        {
          position: [2,7],
          name: 'flag'
        }
      ],
      hintList : [[0,0],[1,1], [2,1],[2,2], [2,3], [2,4], [2,5], [2,6], [2,7]],
      hintWord : [
        ['Alligator', "Crocogile", "Reptile"],
        ['Beans', 'Seed', 'Start'],
        ['RAM', 'Piano', 'Memory'],
        ['Beetle', 'Sign', 'Golfflag'],
        ['Flag', 'Sign', 'Golfflag'],
        ['Flag', 'Sign', 'Golfflag'],
        ['Flag', 'Sign', 'Golfflag'],
        ['Flag', 'Sign', 'Golfflag'],
        ['Flag', 'Sign', 'Golfflag']
      ]
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
