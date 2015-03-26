/**
 * Created by jbr134 on 26/03/15.
 */
'use strict';

class Communicator{

  constructor(){
    this.socket = io('//'+window.location.hostname+':3000');

    this.socket.on('news', function (data) {
      console.log(data);
      //socket.emit('my other event', { my: 'data' });
    });
  }


  /**
   * Tell the server that player (name) is moving to position hintNr
   * @param name
   * @param hintNr
   */
  movePlayer(name, hintNr){
    this.socket.emit("movePlayer", {name:name, hintNr:hintNr});
  }

}

const comm = new Communicator();
