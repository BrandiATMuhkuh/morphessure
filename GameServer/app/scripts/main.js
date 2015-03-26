'use strict';

var phaser = new Phaser.Game(800, 600, Phaser.AUTO, 'morphessor');


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
p2.setHints(hintList1);
game.addPlayer(p1);
game.addPlayer(p2);

phaser.state.add("Start",game);

class UIMaster{
  constructor(){
    //Get players
    $("#selectPlayerButton").on("click", function(){
      console.log("pressed button",$('#listOfPlayers').find(":selected").text());
      var sText = $('#listOfPlayers').find(":selected").text();
      if(sText !== "notSelected"){
        console.log("you selected player: "+sText)
        comm.clientSignOn(sText);
      }else{
        alert("Please select a player");
      }
    })
  }


  drawPlayerDropDown(playerList){
    console.log("drawPlayerDropDown",playerList);
    var listOfPlayers = $('#listOfPlayers');
    for(var player in playerList){
      listOfPlayers.append(new Option(playerList[player].name, playerList[player].name, false, false));
    }
    listOfPlayers.selectpicker('refresh');
  }
}

class Main{

  constructor(){
    this.uiMaster = new UIMaster();
    //loads player list
    comm.addServerPlayerList((function(data){
      this.uiMaster.drawPlayerDropDown(data);
    }).bind(this));
    comm.clientPlayerList();//request player list
  }

}






//global variables
window.onload = function () {
  phaser.state.start("Start");
  const main = new Main();
};
