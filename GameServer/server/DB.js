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
var exists = fs.existsSync(file);
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

  populatePlayers(){
    new Promise(function(fulfill, reject){
      c_players.find({}).toArray(function(err, docs){
        fulfill(docs);
      });
    }).then(function(yea){
        this.master.players = yea;
      }.bind(this));

  }

  getLevel(levelName, condition, callback){

    var myMaster = this.master;
    var levelsWithPlayer = {};
    var cascation = 0;

    c_players.find().toArray(function(err, docs) {
      //console.log(docs);
      docs.forEach(function(a){

        //create player Object for return
        levelsWithPlayer[a.name] = {trapList:[], hintList:[], hintWord:[]};
        cascation = cascation +1;

        async.waterfall([
          function(callback) {
            c_trapList.find({"level":levelName, "playerName":a.name, "condition":condition}).toArray(function(aerr, adocs){
              //console.log(adocs.length);
              if(adocs.length > 0){
                //a.trapList = adocs[0].traps;
                callback(null, adocs[0].traps);
              }else{
                callback(null, null);
              }
            });
          },
          function(traps, callback) {
            c_hintList.find({"level":levelName, "playerName":a.name, "condition":condition}).toArray(function(aerr, adocs){
              //console.log(adocs.length);
              if(adocs.length > 0){
                //a.hintList = adocs[0].hints;
                callback(null, traps, adocs[0].hints);
              }else{
                callback(null, null, null);
              }
              //a.trapList = adocs.traps;
              //console.log(a);
              //console.log("3");

              //console.log(a);
            });
          },
          function(traps, hints, callback){
            c_dictionary.find({}).sort({wordValance:1})
              .toArray(function(err, hintWords){

                //console.log(hintWords);
                var hintWordsObj = {};
                for(let hint in hintWords){
                  //console.log(hintWords[hint]);

                  if(hintWordsObj[hintWords[hint].refWord] === undefined){
                    hintWordsObj[hintWords[hint].refWord] = [];
                  }
                  hintWordsObj[hintWords[hint].refWord].push(hintWords[hint].name);
                }


                //console.log(hintWordsObj);
                callback(null, traps, hints, hintWordsObj);
              });
          }
        ], function (err, traps, hints, hintWords) {
          //console.log(hintWords, hints);

          var myWordList = [];

          if(hints !== null){
            for(let hint in hints){
              myWordList.push(hintWords[getTrapNameAtPost(traps, hints[hint])]);
            }
          }

          // result now equals 'done'
          //var myPlayer = myMaster.getPlayer(a.name);
          levelsWithPlayer[a.name].trapList = traps;
          levelsWithPlayer[a.name].hintList = hints;
          levelsWithPlayer[a.name].hintWord = myWordList;
          //console.log(myPlayer);

          cascation = cascation - 1;
          if(cascation === 0){
            //console.log("Cast start", levelsWithPlayer);
            callback(levelsWithPlayer);
          }


        });

      });
    });





  }

  /**
   * This will save a log in the DB db.
   * @param log needes to be DbClasses.Log object
   */
  saveLog(log) {
    /*
    if (!(log instanceof DbClasses.LogPlayerSay)
      && !(log instanceof DbClasses.LogPlayerMoves)) {
      return null;
    }*/

    c_logs.insert(log);


    var stmt = sqlite.prepare("INSERT INTO `Log`(`timestamp`, `ISOTime`, `type`,`pId`,`condition`,`transmitter`,`receiver`,`word`,`correct`,`relativePosition`,`absolutePosition`,`symbolName`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?);");
    console.log("SQLITE LOG",log);
    stmt.run(log.time, log.ISOTime, log.type, log.pId, log.condition, log.transmitter, log.receiver, log.word, log.correct, log.relativePosition, log.absolutePosition, log.symbolName);
    stmt.finalize();

  }

}

function getTrapNameAtPost(trapList, pos){

  for(let trap in trapList){
    if(trapList[trap].position[0] === pos[0] && trapList[trap].position[1] === pos[1]){
      return trapList[trap].name;
    }
  }

  return null;
}

module.exports = DB;
