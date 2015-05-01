/**
 * This documents is purely create to create a test db.
 */
'use strict';
var assert = require('assert');
var Engine = require('tingodb')();
var DbClasses = require('./DbClasses.js');
var Participant = DbClasses.Participant;
var DictEntry = DbClasses.DictEntry;
var Hint = DbClasses.Hint;
var Trap = DbClasses.Trap;
var Player = DbClasses.Player;
var Condition = DbClasses.Condition;
var db = new Engine.Db('database', {});

//Define Collections
var c_players = db.collection('c_players');
var c_conditions = db.collection('c_conditions');
var c_trapList = db.collection("c_trapList");
var c_hintList = db.collection("c_hintList");
var c_dictionary = db.collection("c_dictionary");
var c_participants = db.collection("c_participants");


var conditions = [
  new Condition(1, "OneRobotOneHumanNoMirror", "the robot will play without any special extras. eg. no gazing, mirroroing, ...")
];

var players = [
  new Player(1, "player1", "human"),
  new Player(-1, "player2", "robot"),
  new Player(0, "Researcher", "researcher")
];

var trapList = [
  new Trap ("OneRobotOneHumanNoMirror", 1, "tutorial", "player1", [
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
      name: 'marijuana'
    },
    {
      position: [2,3],
      name: 'pipe'
    },
    {
      position: [2,4],
      name: 'dunes'
    },
    {
      position: [2,5],
      name: 'doctor'
    },
    {
      position: [2,6],
      name: 'teacher'
    },
    {
      position: [2,7],
      name: 'drugs'
    }
  ]),
  new Trap("OneRobotOneHumanNoMirror", 1, "tutorial", "player2")
    .addTrap([0,0], 'alligator')
    .addTrap([1,1], 'beans')
    .addTrap([2,1], 'RAM')
    .addTrap([2,2], 'beetle')
    .addTrap([2,3], 'referee')
    .addTrap([2,4], 'fireplace')
    .addTrap([2,5], 'moth')
    .addTrap([2,6], 'pipe')
    .addTrap([2,7], 'teacher'),
  new Trap("OneRobotOneHumanNoMirror", 1, "singlePlayer", "player1", [
    {"position":[0,0],"name":"cattle"},{"position":[1,1],"name":"snack"},{"position":[2,1],"name":"sphere"},{"position":[2,2],"name":"computer"},{"position":[2,3],"name":"USB"},{"position":[2,4],"name":"marijuana"},{"position":[2,5],"name":"referee"},{"position":[2,6],"name":"mouse"},{"position":[2,7],"name":"man"}]),
  new Trap("OneRobotOneHumanNoMirror", 1, "singlePlayer", "player2", [{"position":[0,0],"name":"alligator"},{"position":[1,1],"name":"beans"},{"position":[2,1],"name":"RAM"},{"position":[2,2],"name":"beetle"},{"position":[2,3],"name":"pigeon"},{"position":[2,4],"name":"flag"},{"position":[2,5],"name":"ocean"},{"position":[2,6],"name":"programmer"},{"position":[2,7],"name":"marijuana"}])
];

var hintList = [
  new Hint("OneRobotOneHumanNoMirror", 1, "tutorial", "player1", [[0,0], [1,1], [2,1], [2,2], [2,3], [2,4], [2,5], [2,6], [2,7]]),
  new Hint("OneRobotOneHumanNoMirror", 1, "tutorial", "player2", [[0,0], [1,1], [2,1], [2,2], [2,3], [2,4], [2,5], [2,6], [2,7]]),
  new Hint("OneRobotOneHumanNoMirror", 1, "singlePlayer", "player1", [[0,0], [1,1], [2,1], [2,2], [2,3], [2,4], [2,5], [2,6], [2,7]]),
  new Hint("OneRobotOneHumanNoMirror", 1, "singlePlayer", "player2", [[0,0], [1,1], [2,1], [2,2], [2,3], [2,4], [2,5], [2,6], [2,7]]),
];

var dictionary = [
  new DictEntry("Alligator", 1.2, 3.2, 'alligator'),
  new DictEntry("Crocodile", 1.2, 3.2, 'alligator'),
  new DictEntry("Reptile", 1.2, 3.2, 'alligator'),
  new DictEntry("beans", 1.2, 3.2, 'beans'),
  new DictEntry("Seed", 1.2, 3.2, 'beans'),
  new DictEntry("Start", 1.2, 3.2, 'beans'),
  new DictEntry("RAM", 1.2, 3.2, 'RAM'),
  new DictEntry("Piano", 1.2, 3.2, 'RAM'),
  new DictEntry("Memory", 1.2, 3.2, 'RAM'),
  new DictEntry("Beetle", 1.2, 3.2, 'beetle'),
  new DictEntry("pigeon", 1.2, 3.2, 'pigion'),
  new DictEntry("Flag", 1.2, 3.2, 'flag'),
  new DictEntry("Golfflag", 1.2, 3.2, 'flag'),
  new DictEntry("ocean", 1.2, 3.2, 'ocean'),
  new DictEntry("majijuana", 1.2, 3.2, 'majijuana')
];

var participants = [
  new Participant("Juergen", "player2", "OneRobotOneHumanNoMirror", 123)
];find


//empty all data
c_players.remove({});
c_conditions.remove({});
c_trapList.remove({});
c_dictionary.remove({});
c_participants.remove({});

//Store new data
c_players.insert(players);
c_trapList.insert(trapList);
c_hintList.insert(hintList)
c_conditions.insert(conditions);
c_dictionary.insert(dictionary);
c_participants.insert(participants);

//test
c_players.find({}).toArray(function(err, docs) {
  console.log(docs.length);
});


