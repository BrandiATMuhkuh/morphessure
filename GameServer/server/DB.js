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

//Define Collections
var c_players = db.collection('c_players');
var c_conditions = db.collection('c_conditions');
var c_trapList = db.collection("c_trapList");
var c_hintList = db.collection("c_hintList");
var c_dictionary = db.collection("c_dictionary");
var c_participants = db.collection("c_participants");

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


    c_players.find().toArray(function(err, docs) {
      //console.log(docs);
      docs.forEach(function(a){
        //console.log("balc",a);
        console.log("1");



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
              //a.trapList = adocs.traps;
              //console.log(a);
              console.log("2");
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
              console.log("3");

              //console.log(a);
            });
          }
        ], function (err, traps, hints) {
          //console.log(traps, hints);
          // result now equals 'done'
          //console.log("waterfall Result", traps, hints);
        });

      });
    });





    c_players.find({"name":"player1"}, function(err, item) {
      //console.log(item);
    });

    /*
    c_players.count({"name":"player1"},function(a,b){
      console.log(a,b);
    });
    */

  }
}

module.exports  = DB;
