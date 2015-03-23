/**
 * Created by jbr134 on 24/03/15.
 */
'use strict';

function Game(phaser) {
  this.phaser = phaser;
};

Game.prototype = {
  preload: function() {
    // load preloader assets

    this.tileArray = [
      'tileAutumn.png',
      'tileAutumn_full.png',
      'tileDirt.png',
      'tileDirt_full.png',
      'tileGrass.png',
      'tileGrass_full.png',
      'tileLava.png',
      'tileLava_full.png',
      'tileMagic.png',
      'tileMagic_full.png',
      'tileRock.png',
      'tileRock_full.png',
      'tileSand.png',
      'tileSand_full.png',
      'tileSnow.png',
      'tileSnow_full.png',
      'tileStone.png',
      'tileStone_full.png',
      'tileWater.png',
      'tileWater_full.png',
      'tileWater_shadow.png'];

    for(var tile in this.tileArray){
      console.log(this.tileArray[tile]);
      this.phaser.load.image(this.tileArray[tile], 'assets/base_pack/Spritesheet/'+this.tileArray[tile]);
    }




  },
  create: function() {
    // setup game environment
    // scale, input etc..

    this.phaser.stage.backgroundColor = '#ca9a6c';
    console.log("game is created");

    this.phaser.world.setBounds(0, 0, 680, 1400);

  /*
    this.phaser.add.sprite(65/2, 89+72, 'tileWater.png');
    this.phaser.add.sprite(65+65/2, 89+72, 'tileLava_full.png');
    this.phaser.add.sprite(0, 89, 'tileMagic.png');
    this.phaser.add.sprite(65, 89, 'tileStone.png');
*/

    for (var topLeft = 0; topLeft < 30; topLeft = topLeft +1){

      var offSet = topLeft*107;

      for(var rightOff = 0; rightOff < 30; rightOff = rightOff +1){
        this.phaser.add.sprite(66*rightOff, offSet, this.tileArray[Math.floor(Math.random()*this.tileArray.length)]);
      }

      for(var rightOff = 0; rightOff < 30; rightOff = rightOff +1){
        this.phaser.add.sprite(66*rightOff-65/2, offSet+53, this.tileArray[Math.floor(Math.random()*this.tileArray.length)]);
      }
    }
  },

  update: function(){

  }
};


