/**
 * Created by jbr134 on 3/06/15.
 */
"use strict";
var sqlite3 = require("sqlite3").verbose();
var fs = require("fs");
var file = "database/logging.sqlite";
var sqlite = new sqlite3.Database(file);
var csv = require("fast-csv");

class ConditionDictionaryGenerator{

  constructor(master){
    this.master = master;
    this.singleSymbolList = {};

    //this.master.condition.conditionId

    
  }

  /**
   * Generates the dictionary for all users and returns it as a promise
   * @returns {Promise} the Promise when done or failed
   */
  generate(){
    var _self = this;
    var promise = new Promise(function(resolve, reject) {
      _self
        ._createDictionary(_self.master.pId)
        .then(function(result){
          return _self._saveFile(_self.master.pId, result);
        })
        .then(function(result){
          resolve(result);
        });
    });

    return promise;


  }

  /**
   * Creates the the new dictionary depending on the users behfior
   * @param pId the current player Id
   * @returns {Promise} return a promise with the dict when finished
   * @private
   */
  _createDictionary(pId){
    return new Promise(function(resolve, reject){
      console.log("_createDictionary");

      //TODO do real calculation here
      var possibleOjb = {
        player1: [],
        player2: []
      };

      

      sqlite.all("select * from log where type = 'LogPlayerSaid' and word != 'WRONG'", function(err, row) { 
        
        for(var i = 0; i < row.length; i++){
          this.singleSymbolList[row[i].symbolName] = row[i].word;          
        }
        console.log(__dirname);
        console.log(__filename);
        csv
        .fromPath(__dirname+"/conditions/condition1.csv", {headers : true, objectMode:true})
        .on("data", function(data){
          //csvArray.push(data);

          if(data.presentation !== "pre" && data.presentation !== "post"){

            if(data.navigator === "robot"){
              console.log(data.change);

              if(data.change === "MATCH"){

                if(this.singleSymbolList[data.item] === data.option1){
                  possibleOjb.player1.push([data.option1, data.option2]);
                }else if(this.singleSymbolList[data.item] === data.option2){
                  possibleOjb.player1.push([data.option2, data.option1]);
                }else{
                  possibleOjb.player1.push([data.option1]);
                }

              }else if(data.change === "CHANGE"){
                if(this.singleSymbolList[data.item] === data.option1){
                  possibleOjb.player1.push([data.option2, data.option1]);
                }else if(this.singleSymbolList[data.item] === data.option2){
                  possibleOjb.player1.push([data.option1, data.option2]);
                }else{
                    possibleOjb.player1.push([data.option1]);
                }
              }

              
            }else{
              possibleOjb.player2.push([data.option1, data.option2]);
            }
          }
        }.bind(this))
       .on("end", function(){
           //console.log("done", possibleOjb);
           resolve(possibleOjb);
        });
      }.bind(this));
   

      
    }.bind(this));
  }

  _saveFile(pId, obj){
    return new Promise(function(resolve, reject){
      //console.log("_saveFile", pId, obj);
      var fs = require("fs");
      fs.writeFile("server/GeneratedDictionaries/condition1_pId_"+pId+".json", JSON.stringify(obj, null, "\t"), function(err) {
        if(err) {
          return console.log(err);
          reject(err);
        }

        console.log("The file was saved!");
      });


      resolve(obj);
    });
  }

}

module.exports = ConditionDictionaryGenerator;
