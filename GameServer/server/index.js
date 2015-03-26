/**
 * Create the DB connection and does db I/O
 */
'use strict';
var master = require('./Master.js');

console.log('Start Server');

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
