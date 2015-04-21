'use strict';

const phaser = new Phaser.Game(800, 600, Phaser.WEBGL, 'morphessor');
const localPlayer = {
  name: "Player2"
};

/**
 * The Main class controls UIMaster and Game.
 * This is the master controller for all the page
 */
class Main{

  constructor(){
    this.isPlayerListDrawn = false;
    this.uiMaster = new UIMaster();

    //loads player list, trapList and hintList exactly ONE TIME!
    comm.addServerPlayerList((function(data){
      if(this.isPlayerListDrawn === false){
        console.groupCollapsed("Load player related things");
        this.uiMaster.drawPlayerDropDown(data);
        this.uiMaster.generateGame(data);
        console.groupEnd();
        this.isPlayerListDrawn = true;
      }
      this.uiMaster.drawResearcherPlayerList(data);
    }).bind(this));

    comm.clientPlayerList();//request player list
  }

}

//global variables
window.onload = function () {
  const main = new Main();
};
