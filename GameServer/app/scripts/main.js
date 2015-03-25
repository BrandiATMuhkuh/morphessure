'use strict';

/*
var socket = io('//'+window.location.hostname+':3000');
socket.on('news', function (data) {
  console.log(data);
  socket.emit('my other event', { my: 'data' });
});*/


var phaser = new Phaser.Game(800, 600, Phaser.CANVAS, 'morphessor');


var trapList1 = [
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
];
var trapList2 = [
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
];
var hintList1 = [[0,0],[1,1], [2,1]];

var game = new Game(phaser);
var p1 = new Player("Player1");
var p2 = new Player("Player2");
p1.setTraps(trapList1);
p1.setHints(hintList1);
p2.setTraps(trapList2);
game.addPlayer(p1);
game.addPlayer(p2);

phaser.state.add("Start",game);


//global variables
window.onload = function () {

  phaser.state.start("Start");
};
