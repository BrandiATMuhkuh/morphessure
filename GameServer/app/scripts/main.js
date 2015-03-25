'use strict';

/*
var socket = io('//'+window.location.hostname+':3000');
socket.on('news', function (data) {
  console.log(data);
  socket.emit('my other event', { my: 'data' });
});*/


//global variables
window.onload = function () {



  var phaser = new Phaser.Game(800, 600, Phaser.AUTO, 'morphessor');


  var trapList1 = [
    {
      position: 0,
      name: 'belly'
    },
    {
      position: 1,
      name: 'thief'
    },
    {
      position: 5,
      name: 'thief'
    },
    {
      position: 11,
      name: 'flag'
    }
  ];
  var trapList2 = [
    {
      position: 1,
      name: 'belly'
    },
    {
      position: 11,
      name: 'thief'
    },
    {
      position: 21,
      name: 'thief'
    },
    {
      position: 31,
      name: 'flag'
    }
  ];
  var hintList1 = [0,11, 12];

  var game = new Game(phaser);
  var p1 = new Player("Player1");
  var p2 = new Player("Player2");
  p1.setTraps(trapList1);
  p1.setHints(hintList1);
  p2.setTraps(trapList2);
  game.addPlayer(p1);
  game.addPlayer(p2);

  phaser.state.add("Start",game);
  phaser.state.start("Start");

};
