/**
 * Created by jbr134 on 24/03/15.
 */
'use strict';

class Game {

  constructor(phaser){
    this.phaser = phaser;
    this.cursors = null;
    this.tileArray = null;
  }

  preload(){
    // load preloader assets

    //This array contains all background prefabs
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


    //Load all images int the cache
    for(var tile in this.tileArray){
      this.phaser.load.image(this.tileArray[tile], 'assets/base_pack/Spritesheet/'+this.tileArray[tile]);
    }

    //Load hints
    this.hint = "stoneRing.png";
    this.phaser.load.image("stoneRing.png", 'assets/base_pack/Spritesheet/stoneRing.png');

  }

  create(){
    // setup game environment
    // scale, input etc..

    this.phaser.stage.backgroundColor = '#ca9a6c';
    console.log("game is created");

    this.phaser.world.setBounds(0, 0, 2000, 4000);


    //Create background images
    for (var topLeft = 0; topLeft < 30; topLeft = topLeft +1){

      var offSet = topLeft*107;

      for(var rightOff = 0; rightOff < 30; rightOff = rightOff +1){
        this.phaser.add.sprite(66*rightOff, offSet, this.tileArray[Math.floor(Math.random()*this.tileArray.length)]);
      }

      for(var rightOff = 0; rightOff < 30; rightOff = rightOff +1){
        this.phaser.add.sprite(66*rightOff-65/2, offSet+53, this.tileArray[Math.floor(Math.random()*this.tileArray.length)]);
      }
    }

    //Add a hind
    this.phaser.add.sprite(0, 0, "stoneRing.png");

    this.cursors = this.phaser.input.keyboard.createCursorKeys();
  }

  update(){
    if (this.cursors.up.isDown)
    {
      this.phaser.camera.y -= 4;
    }
    else if (this.cursors.down.isDown)
    {
      this.phaser.camera.y += 4;
    }

    if (this.cursors.left.isDown)
    {
      this.phaser.camera.x -= 4;
    }
    else if (this.cursors.right.isDown)
    {
      this.phaser.camera.x += 4;
    }
  }
}


