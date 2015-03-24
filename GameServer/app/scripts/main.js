'use strict';
console.log('\'Allo \'Allod!');

/*
var socket = io('//'+window.location.hostname+':3000');
socket.on('news', function (data) {
  console.log(data);
  socket.emit('my other event', { my: 'data' });
});*/


//global variables
window.onload = function () {



  var phaser = new Phaser.Game(800, 600, Phaser.AUTO, 'morphessor');

  var game = new Game(phaser);
  game.addPlayer(new Player("Player1"));
  game.addPlayer(new Player("Player2"));

  phaser.state.add("Start",game);
  phaser.state.start("Start");

};
