'use strict';
var communicator = require('./Communicator.js');

console.log('Start Server');
/**
 * Create the DB connection and does db I/O
 */

class Database {

  constructor (dbAddress, dbPort){
    console.log(dbAddress + " " + dbPort);
  }

  getScene(sceneNr){

    return sceneNr
  }

}

//var myDb = new Database("12343", 163);
//console.log(myDb.getScene(15));

//module.exports  = io;
