'use strict';
console.log('\'Allo \'Allod!');
var phaser = null;
/*
var socket = io('//'+window.location.hostname+':3000');
socket.on('news', function (data) {
  console.log(data);
  socket.emit('my other event', { my: 'data' });
});*/

//global variables
window.onload = function () {


  var phaser = new Phaser.Game(800, 600, Phaser.AUTO, 'morphessor',
    { preload: preload, create: create, update: update, render: render });

  var game = new Game(phaser);

  function preload(){
    game.preload();
  }

  function create(){
    game.create();
  }

  function update(){
    game.update();
  }

  function render(){

  }

};
