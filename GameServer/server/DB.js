/**
 * Created by jbr134 on 29/04/15.
 */
'use strict';
var Promise = require('promise');
var assert = require('assert');
var Engine = require('tingodb')();
var DbClasses = require('./DbClasses.js');
var async = require('async');
var db = new Engine.Db('database', {});
var sqlite3 = require("sqlite3").verbose();
var fs = require("fs");
var file = "database/logging.sqlite";
var sqlite = new sqlite3.Database(file);

//Define Collections
var c_players = db.collection('c_players');
var c_conditions = db.collection('c_conditions');
var c_trapList = db.collection("c_trapList");
var c_hintList = db.collection("c_hintList");
var c_dictionary = db.collection("c_dictionary");
var c_participants = db.collection("c_participants");
var c_logs = db.collection("c_logs");

class DB {
  constructor(master){
    this.master = master;
  }

  /**
   * This will save a log in the DB db.
   * @param log needes to be DbClasses.Log object
   */
  saveLog(log) {

    var stmt = sqlite.prepare("INSERT INTO `Log`(`timestamp`, `ISOTime`, `type`,`pId`,`condition`, `level`, `transmitter`,`receiver`,`word`,`correct`,`relativePosition`,`absolutePosition`,`symbolName`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?);");
    //console.log("SQLITE LOG",log);
    stmt.run(log.time, log.ISOTime, log.type, this.master.pId, log.conditionId, this.master.currentLevel, log.transmitter, log.receiver, log.word, log.correct, log.relativePosition, log.absolutePosition, log.symbolName);
    stmt.finalize();

  }

}

/*
function getTrapNameAtPost(trapList, pos){

  for(let trap in trapList){
    if(trapList[trap].position[0] === pos[0] && trapList[trap].position[1] === pos[1]){
      return trapList[trap].name;
    }
  }

  return null;
}*/

module.exports = DB;
