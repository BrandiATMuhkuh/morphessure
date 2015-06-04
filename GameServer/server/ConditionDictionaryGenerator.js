/**
 * Created by jbr134 on 3/06/15.
 */
'use strict';
var sqlite3 = require("sqlite3").verbose();
var fs = require("fs");
var file = "database/logging.sqlite";
var sqlite = new sqlite3.Database(file);

class ConditionDictionaryGenerator{

  constructor(master){
    this.master = master;
  }

  /**
   * Generates the dictionary for all users and returns it as a promise
   * @returns {Promise} the Promise when done or failed
   */
  generate(){



    var _self = this;
    var promise = new Promise(function(resolve, reject) {
      _self
        ._createDictionary(123)
        .then(function(result){
          return _self._saveFile(123, "testasdf");
        })
        .then(function(result){
          resolve(result);
        });
    });

    return promise;


  }

  _createDictionary(pId){
    return new Promise(function(resolve, reject){
      console.log("_createDictionary");
      resolve("_createDictionary "+pId);
    });
  }

  _saveFile(pId, obj){
    return new Promise(function(resolve, reject){
      console.log("_saveFile", pId, obj);
      var fs = require('fs');
      fs.writeFile("server/GeneratedDictionaries/condition1_pId_"+pId+".json", "Hey there!", function(err) {
        if(err) {
          return console.log(err);
          reject(err);
        }

        console.log("The file was saved!");
      });


      resolve("_saveFile"+" "+pId+" "+obj);
    });
  }

}

module.exports = ConditionDictionaryGenerator;
