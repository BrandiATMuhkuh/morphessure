/**
 * Created by jbr134 on 22/04/15.
 */
'use strict';

/**
 * This class will handle the network structure and who talkes to whom
 */
class Network {

  constructor(networks){
    this.position = 0;
    this.networks = networks;
    this.levelName = null;
  }

  /**
   * Returns who talkes to whom next
   * @returns {*} received a class which contains
   * a transmitter and a receiver {tranmitter;xxx, receiver: xxx}
   * @return null if the levelName is null and no network could be created
   */
  getNext(){

    if(this.levelName === null){
      console.log("the level is null. Please select a level first");
      return null;
    }

    var next = {
      transmitter: this.networks[this.levelName].network[this.position].transmitter,
        receiver: this.networks[this.levelName].network[this.position].receiver
    };

    this.position = this.networks[this.levelName].network[this.position].next;

    return next;

  }



  /**
   * This will resent the network. Later this will be
   * replaced with the network we defined.
   * @param levelName the current level object
   * @param hintLengh the lengh of all hints
   */
  resetNetwork(levelName, hintLengh){
    this.position = 0;
    this.levelName = levelName;
  }
}


module.exports  = Network;
