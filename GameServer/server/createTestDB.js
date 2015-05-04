/**
 * This documents is purely create to create a test db.
 */
'use strict';
var Join = require('mongo-join').Join;
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
var async = require('async');

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
  new DictEntry("Crocodile", 1.3, 3.2, 'alligator'),
  new DictEntry("Reptile", 1.4, 3.2, 'alligator'),
  new DictEntry("beans", 1.5, 3.2, 'beans'),
  new DictEntry("Seed", 1.6, 3.2, 'beans'),
  new DictEntry("Start", 1.7, 3.2, 'beans'),
  new DictEntry("RAM", 1.9, 3.2, 'RAM'),
  new DictEntry("Piano", 1.2, 3.2, 'RAM'),
  new DictEntry("Memory", 1.2, 3.2, 'RAM'),
  new DictEntry("Beetle", 1.2, 3.2, 'beetle'),
  new DictEntry("pigeon", 1.2, 3.2, 'pigion'),
  new DictEntry("Flag", 1.2, 3.2, 'flag'),
  new DictEntry("Golfflag", 1.2, 3.2, 'flag'),
  new DictEntry("ocean", 1.2, 3.2, 'ocean'),
  new DictEntry("majijuana", 1.2, 3.2, 'majijuana'),

  new DictEntry("programmer", 1.2, 3.2, 'programmer'),
  new DictEntry("cattle", 1.2, 3.2, 'cattle'),
  new DictEntry("snack", 1.2, 3.2, 'snack'),
  new DictEntry("sphere", 1.2, 3.2, 'sphere'),
  new DictEntry("computer", 1.2, 3.2, 'computer'),
  new DictEntry("USB", 1.2, 3.2, 'USB'),
  new DictEntry("marijuana", 1.2, 3.2, 'marijuana'),
  new DictEntry("referee", 1.2, 3.2, 'referee'),
  new DictEntry("mouse", 1.2, 3.2, 'mouse'),
  new DictEntry("man", 1.2, 3.2, 'man'),
  new DictEntry("man", 1.2, 3.2, 'beetle'),
  new DictEntry("referee", 1.2, 3.2, 'referee'),
  new DictEntry("fireplace", 1.2, 3.2, 'fireplace'),
  new DictEntry("moth", 1.2, 3.2, 'moth'),
  new DictEntry("pipe", 1.2, 3.2, 'pipe'),
  new DictEntry("teacher", 1.2, 3.2, 'teacher'),
  new DictEntry("belly", 1.2, 3.2, 'belly'),
  new DictEntry("thief", 1.2, 3.2, 'thief'),
  new DictEntry("cup", 1.2, 3.2, 'cup'),
  new DictEntry("dunes", 1.2, 3.2, 'dunes'),
  new DictEntry("doctor", 1.2, 3.2, 'doctor'),
  new DictEntry("teacher", 1.2, 3.2, 'teacher'),
  new DictEntry("drugs", 1.2, 3.2, 'drugs')

];

var participants = [
  new Participant("Juergen", "player2", "OneRobotOneHumanNoMirror", 123)
];


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

var levelName = 'tutorial';
var condition = 'OneRobotOneHumanNoMirror';








