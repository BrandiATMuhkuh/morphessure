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

class SaySomething{
  constructor(){
    this.voiceURI = 'native';
    this.volume = 1; // 0 to 1
    this.rate = 1; // 0.1 to 10
    this.pitch = 0; //0 to 2
    this.lang = 'en-US';
    this.msg = null;
  }

  say(text, endF){
    console.log("say: ", text);
    var msg = new SpeechSynthesisUtterance(text);
    msg.volume = this.volume; // 0 to 1
    msg.rate = this.rate; // 0.1 to 10
    msg.pitch = this.pitch; //0 to 2
    msg.lang = this.lang;

    msg.onend = function(e) {
      console.log('Finished in ' + event.elapsedTime + ' seconds.');
    };

    speechSynthesis.speak(msg);
  }

  say2(text){
    this.sayArray(this.splitMe(text), 0);
  }

  intro(){
    let introText = `Hello! And thank you for coming!
    Please read the concent form and information sheet. If you have any questions ask my assistant!`;


    this.say2(introText);
  }

  questionear(){
    let introText = `Please fill the questionear!`;
    this.say2(introText);
  }

  shortIntro(){
    let introText = `As you already read in the concent form, you will perform a navigation task.
    You will find a short introduction on a piece of paper next to your screen.
    But I will also walk through it with you. Every task has a similar map layout build
    up on hexagon shaped tiles. If you stand on a tile, you can go
    in six directions. The goal is to walk your character step by step along the yellow bordered tiles.

    Your first task is to navigate the character via voice control from tile to tile. Don't worry we do some
    practice first`;


    //console.dir(this.splitMe(introText), this.splitMe(introText).length);
    this.say2(introText);
    //this.say(introText);
  }

  story() {
    let st = `Now you two will do a similar task but you will need to collaborate to finish it.
    Please imagine the following situation.
    Both of you have to run away from the darkness. The darkness is hungry but as soon as it has eaten it will stop searching for new food.
    To run away from the darkness, you have to follow the yellow bordered tiles, as you did in the previous task.
    It is very important that you only step on yellow bordered tiles. Otherwise the darkness will catch you. But don't worry, there is an other team seated in an other room who will do the same task as you. Just be faster then them to survive.
    Oh and one more thing. Since you were so nervouse before you started off, you two accidentally switched your maps before you left off. Now each of you holds the correct map of the other one.
    Your have to help each other navigate the world. Very important. You can only do one step before the other one can do a step!`;

    this.say2(st);
  }

  sayArray(arr, index){
    if(index >= arr.length || arr[index].trim() === "" ){
      return null;
    }

    this.msg = new SpeechSynthesisUtterance(arr[index]);
    this.msg.volume = 1; // 0 to 1
    this.msg.rate = 1; // 0.1 to 10
    this.msg.pitch = 0; //0 to 2
    this.msg.lang = 'en-US';

    this.msg.onend = function(e) {
      if(index < arr.length && arr[index].trim() !== "" ){
        this.sayArray(arr, index+1);
      }
    }.bind(this);

    speechSynthesis.speak(this.msg);



  }

  splitMe(text){
    text = text.replace(/(\r\n|\n|\r)/gm,"");
    let res = text.split(".");
    for(let sent in res){
      res[sent] = res[sent].trim();
    }
    return res;
  }
}

let say = new SaySomething();
//say.story();
