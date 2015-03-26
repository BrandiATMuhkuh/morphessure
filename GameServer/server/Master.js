/**
 * Created by jbr134 on 26/03/15.
 */
'use strict';

class Master{

  constructor(){
    this.communicator = require('./Communicator.js');
    this.communicator.setMaster(this);
  }
}

module.exports  = new Master();
