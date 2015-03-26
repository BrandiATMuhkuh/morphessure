/**
 * Created by jbr134 on 26/03/15.
 */
'use strict';

class Communicator{

  constructor(){
    this.socket = io('//'+window.location.hostname+':3000');
    this.serverMovePlayerFun = [];

    //Receive commands from server
    this.socket.on("server:movePlayer",(function(data){
      console.log("server:movePlayer",data);
      for (var func in this.serverMovePlayerFun){
        this.serverMovePlayerFun[func](data);
      }
    }).bind(this));
  }

  setMaster(master){
    this.master = master;
    console.log("setMaster");
  }


  /**
   * Tell the server that player (name) is moving to position hintNr
   * @param name
   * @param hintNr
   */
  clientMovePlayer(name, hintNr){
    this.socket.emit("client:movePlayer", {name:name, hintNr:hintNr});
  }

  addServerMovePlayer(resFunc){
    this.serverMovePlayerFun.push(resFunc);
  }

}

const comm = new Communicator();
