'use strict';

var phaser = new Phaser.Game(800, 600, Phaser.WEBGL, 'morphessor');
const localPlayer = {
  name: "Player2"
};

let main;
var myData;

/**
 * The Main class controls UIMaster and Game.
 * This is the master controller for all the page
 */
class Main{

  constructor(){
    this.uiMaster = new UIMaster();

    //loads player list, trapList and hintList exactly ONE TIME!
    comm.getServerPlayerList((function(data){

      console.groupCollapsed("Load player related things");
      myData = data;
      this.uiMaster.drawPlayerDropDown(data);
      console.groupEnd();
    }).bind(this));



    comm.clientPlayerList();//request player list
  }

}

//global variables
window.onload = function () {
  main = new Main();
};
