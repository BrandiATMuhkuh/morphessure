/**
 * Created by jbr134 on 24/03/15.
 */
'use strict';


/**
 * After adding to game, setGame() must be used to set game object
 */
class Player{

  constructor(name){
    this.name = name;
    this.grid = [];
    this.game = null;
  }


  getName(){
    return this.name;
  }

  setGame(phaserGame){
    this.game = phaserGame;
  }

  getGame(){
    return this.game;
  }


  /**
   * This will create the world aka background of the players world
   * @param offSet is a multiplier number (e.g. 0,1,2,...)
   * @param leftRight Number of tiles from left to right
   * @param topDown Number of tiles from top to down
   */
  renderWorld(offSet, leftRight, topDown){

    offSet = offSet * leftRight * 66;
    //offSet=offSet;

    //Create background images
    for (var topLeft = 0; topLeft < leftRight; topLeft = topLeft +1){

      var fullOff = topLeft*107;

      for(var rightOff = 0; rightOff < topDown; rightOff = rightOff +1){
        this.grid.push({x:66*rightOff+offSet,y:fullOff});
      }

      for(var rightOff = 0; rightOff < topDown; rightOff = rightOff +1){
        this.grid.push({x:66*rightOff-65/2+offSet,y:fullOff+53});
      }
    }

    //Fill all grid elements with random tiles
    for(var gridElement in this.grid){
      this.addSprite(gridElement, Assets.tiles[Math.floor(Math.random()*Assets.tiles.length)]);
    }
  }

  /**
   * This will add a sprite on the grid gridPosition
   * @param game the phaser object
   * @param gridPosition Position in the grid (e.g 0,1,15,...)
   * @param name Name of the sprite
   */
  addSprite(gridPosition, name){
    this.game.add.sprite(this.grid[gridPosition].x,this.grid[gridPosition].y, name);
  }


  renderHints(){

  }

  renderTraps(){


  }

}
