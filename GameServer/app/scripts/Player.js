/**
 * Created by jbr134 on 24/03/15.
 */
'use strict';

class Player{

  constructor(name){
    this.name = name;
    //this.playerWord = new PlayerWord();
  }

  /*
  get PlayerWord(){
    return this.playerWord;
  }
  */

  getName(){
    return this.name;
  }

  /**
   * This will create the world aka background of the players world
   * @param offSet is a multiplier number (e.g. 0,1,2,...)
   * @param game is a @Phaser object
   * @param leftRight Number of tiles from left to right
   * @param topDown Number of tiles from top to down
   */
  renderWorld(offSet, game, leftRight, topDown){

    offSet = offSet * leftRight * 66;
    //offSet=offSet;

    //Create background images
    for (var topLeft = 0; topLeft < leftRight; topLeft = topLeft +1){

      var fullOff = topLeft*107;

      for(var rightOff = 0; rightOff < topDown; rightOff = rightOff +1){
        game.add.sprite(66*rightOff+offSet, fullOff, Assets.tiles[Math.floor(Math.random()*Assets.tiles.length)]);
      }

      for(var rightOff = 0; rightOff < topDown; rightOff = rightOff +1){
        game.add.sprite(66*rightOff-65/2+offSet, fullOff+53, Assets.tiles[Math.floor(Math.random()*Assets.tiles.length)]);
      }
    }
  }

  renderHints(){

  }

  renderTraps(){


  }

}



