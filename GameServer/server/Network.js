/**
 * Created by jbr134 on 22/04/15.
 */
'use strict';

/**
 * This class will handle the network structure and who talkes to whom
 */
class Network {

  constructor(){
    this.network = [];
    this.position = 0;
    this.current = null;
  }

  /**
   * Returns who talkes to whom next
   * @returns {*} received a class which contains
   * a transmitter and a receiver {tranmitter;xxx, receiver: xxx}
   */
  getNext(){

    if(this.network.length === 0){
      this.generateNetwork();
    }

    var oldPost = this.position;
    this.position = this.position + 1;
    return this.network[oldPost];
  }

  /**
   * returns current nework node. E.g. {transmitter: player1, receiver: player2}
   * @returns {return the current object}
   */
  getCurrent(){
    return this.current;
  }


  /**
   * This is only used for test purposes and creates a simple p1 to p2, and p2 to p1 network
   */
  generateNetwork(){
    for(var i = 0; i<20; i = i +1){
      var next = {
        transmitter: "player1",
        receiver: "player2"
      };

      if(i % 2 === 0){
        next = {
          transmitter: "player2",
          receiver: "player1"
        };
      }

      this.network.push(next);
    }
  }
}


module.exports  = Network;
