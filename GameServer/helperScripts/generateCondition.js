require('./../app/assets/Assets.js');
var template = require("./condition_template.js");
var dbfile = "../../baseline/baseline.db";
var fs = require('fs');
var exists = fs.existsSync(dbfile);
if (!exists) {
  console.log("DB not existing");
  return null;
}
var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database(dbfile);
var x = 10; //The maximul number of columns
var y = 10; //The number of rows
var ysingle = 10;
//var traps = Assets.traps; // all traps
var traps = [];
var dict = {};
var field2 = new Array(y);

var configObject = {
   playerNames: [{name: "player1", map:[], gap:0, field : new Array(y), hints:[], singleField: new Array(ysingle), singleHints:[]}, {name: "player2", map:[], gap:0, field : new Array(y), hints:[], singleField: new Array(ysingle), singleHints:[]}],
   symbolPatterns: [
      {name: "belly", pos:0, gap: 10, pattern: [{name:"player1", pos:null}, {name:"player1", pos:null}, {name:"player2", pos:null}, {name:"player1", pos:null}]},
      {name: "car", pos:0, gap: 10, pattern: [{name:"player1", pos:null}, {name:"player1", pos:null}, {name:"player2", pos:null}, {name:"player1", pos:null}]},
      {name: "knife", pos:0, gap: 10, pattern: [{name:"player1", pos:null}, {name:"player1", pos:null}, {name:"player2", pos:null}, {name:"player1", pos:null}]},
      {name: "snack", pos:0, gap: 10, pattern: [{name:"player2", pos:null}, {name:"player2", pos:null}, {name:"player2", pos:null}, {name:"player2", pos:null}]},
      {name: "clothes", pos:0, gap: 10, pattern: [{name:"player2", pos:null}, {name:"player2", pos:null}, {name:"player2", pos:null}, {name:"player2", pos:null}]},
      {name: "barrels", pos:0, gap: 10, pattern: [{name:"player2", pos:null}, {name:"player2", pos:null}, {name:"player2", pos:null}, {name:"player2", pos:null}]},
      {name: "frog", pos:0, gap: 10, pattern: [{name:"player2", pos:null}, {name:"player2", pos:null}, {name:"player2", pos:null}, {name:"player2", pos:null}]},
      {name: "laptop", pos:0, gap: 10, pattern: [{name:"player2", pos:null}, {name:"player2", pos:null}, {name:"player2", pos:null}, {name:"player2", pos:null}]},
      {name: "referee", pos:0, gap: 10, pattern: [{name:"player2", pos:null}, {name:"player2", pos:null}, {name:"player2", pos:null}, {name:"player2", pos:null}]}
   ],
   gap: 3,
   maxMapLength: 10
};

generateDictionaryFromDB();
//startGenerating();

function generateDictionaryFromDB(){
  console.log("generateDictionaryFromDB");
  var myTraps = [];
  db.all("SELECT * FROM synonyms WHERE word = 1 ORDER BY name ASC", function(err, rows) {  
        rows.forEach(function (row) {  
            //console.log(row.ref, row.name);
            //Add to traps
            row.ref = row.ref.replace(" ", "_");
            if(myTraps.indexOf(row.ref) === -1){
              myTraps.push(row.ref);
            }

            //add to dictionary
            if(dict[row.ref]){
              dict[row.ref].push(row.name);
            }else{
              dict[row.ref] = [];
            }

        });
        //console.log("end");
        //console.log(dict);
        traps = myTraps;
        startGenerating();
    });   
  db.close();
}


function startGenerating(){
  //console.log(traps);
  genManipulationMap();
  for(var i = 0; i < configObject.playerNames.length; i++){

    
    //multiPlayer
    var fi = configObject.playerNames[i].field;
    generateEmptyField(fi);
    //fillMapWithPreTrap(fi, configObject.playerNames[i]);
    
    fillMapWithPreTrapNumber(fi, configObject.playerNames[i], y, true);
    //console.log(fi);

    fillMapWithPreTrapName(fi, configObject.playerNames[i]);
    fillField(fi);
    var mp = getPlayerFromTemplater(configObject.playerNames[i].name, "multiPlayer");
    mp.hintList = configObject.playerNames[i].hints;
    //console.log(mp.hintList);
    mp.trapList = formatToCondition(fi);
    mp.hintWord = geneHintWords(mp.hintList, mp.trapList);

    
    //singlePlayer
    var si = configObject.playerNames[i].singleField;
    generateEmptyField(si);
    fillMapWithPreTrapNumber(si, configObject.playerNames[i], ysingle);
    fillSingleMapWithPreTrapName(si, configObject.playerNames[i]);
    fillField(si);
    //console.log(si);
    var sp = getPlayerFromTemplater(configObject.playerNames[i].name, "singlePlayer");
    var ssp = getPlayerFromTemplater(configObject.playerNames[i].name, "secSinglePlayer");
    ssp.hintList = sp.hintList = configObject.playerNames[i].singleHints;
    ssp.trapList = sp.trapList = formatToCondition(si);
    sp.hintWord = ssp.hintWord = geneHintWords(ssp.hintList, ssp.trapList);
    //console.log(ssp.hintWord);
    
  }
  //console.log(formatToCondition(configObject.playerNames[1].field));
  saveCondition("condition_generated.js", "module.exports = "+JSON.stringify(template, null, '\t')+";");
}



function genManipulationMap(){
   for(var i=0; i<configObject.maxMapLength*configObject.playerNames.length; i = i + 1){
      var mod = i % configObject.playerNames.length; //select player
      var mastPlayer = getPlayer(configObject.playerNames[mod].name);

      var s = getSymbol(mastPlayer.name);

      if(s === null){
         mastPlayer.map.push(null);
      }else{
         s.player.pos = mastPlayer.map.length;
         s.symbol.pos = s.symbol.pos + 1;
         mastPlayer.map.push(s.symbol.name);
      }

   }
}

function geneHintWords(hintList, trapList){
  var hintWord = [];

  for(var i = 0; i < hintList.length; i++){
    //console.log(hintList[i]);
    var f = true;
    for(var k = 0; k < trapList.length && f; k++){
      if(trapList[k].position[0] === hintList[i][0] && trapList[k].position[1] === hintList[i][1]){
        //console.log("found", trapList[k].name, dict[trapList[k].name]);
        hintWord.push(dict[trapList[k].name]);
        f=false;
      }
    }
  }

  return hintWord;

}

function getPlayerFromTemplater(playerName, conditionName){
  //console.log("me",playerName, conditionName);
  //console.log(template.levels[conditionName].fields);
  for(var i = 0; i<template.levels[conditionName].fields.length; i++){
    if(template.levels[conditionName].fields[i].playerName === playerName){
      return template.levels[conditionName].fields[i];
    }
  }
}

function getSymbol(playerName){
   var symbol = randomSymbol();
   var masterPlayer = getPlayer(playerName);
   if(symbol.pos < symbol.pattern.length){
      var player = symbol.pattern[symbol.pos];
      if(player.name === playerName){
         return {symbol: symbol, player: player};
      }
   }


   return null;
}

function randomSymbol(){
  return configObject.symbolPatterns[Math.floor(Math.random()*configObject.symbolPatterns.length)];
}

function getPlayer(name){
   for(var a in configObject.playerNames){
      if(configObject.playerNames[a].name === name){
         return configObject.playerNames[a];
      }
   }

   return null;
}

function generateEmptyField(field){

   for(var i = 0; i < field.length; i = i + 1){
      field[i] = new Array(x);

      for(var k = 0; k < field[i].length; k++){
         field[i][k] = -1;
      }
   }
}

function randomElementNotInList(){
   var wordArr = [];
   for(var a in configObject.symbolPatterns){
      wordArr.push(configObject.symbolPatterns[a].name);
   }

   var v = randomTrapElement();
   while(wordArr.indexOf(v) > -1){
      v = randomTrapElement();
   }

   return v;

   //console.log(v);
}

function randomTrapElement(){
  return traps[Math.floor(Math.random()*traps.length)];
}

function fillMapWithPreTrapNumber(field, playerName, y, multi){
  var forward = false;
   var n = 0
   for(var i=1;i < y;i = i + 1){

      if(i%2 == 1){
         forward = !forward;
         if(forward){
            field[i][1] = ""+n;
            //console.log(i,1,n);
            if(multi){
              playerName.hints.push([i,1]);
            }
            n++;
         }else{
            field[i][8] = ""+n;
            //console.log(i,8,n);
            if(multi){
              playerName.hints.push([i,8]);
            }
            n++;
         }
      }else{
         if(forward){
            for(var b=1; b<8;b=b+1){
              field[i][b] = ""+n;
              //console.log(i,b,n);
              if(multi){
                playerName.hints.push([i,b]);
              }
              n++;
            }
         }else{
            for(var b=1; b<8;b=b+1){
              field[i][8-b] = ""+n;
              //console.log(i,8-b,n);
              if(multi){
                playerName.hints.push([i,8-b]);
              }
               n++;
            }
         }
      }
   }
}

function fillMapWithPreTrapName(field, playerName){
  //console.log(field);
   //add read VALUES
   for(var i = 0; i < field.length; i = i + 1){
     for(var k = 0; k < field[i].length; k = k + 1){
        if(field[i][k]){
          // add hints
          if(parseInt(field[i][k]) > -1){
            //playerName.hints.push([i,k]);
            //console.log(parseInt(field[i][k]));
          }
          
          if(playerName.map[parseInt(field[i][k])]){            
            field[i][k] = playerName.map[parseInt(field[i][k])];
          }else{
             field[i][k] = -1;
          }
        }
     }
  }
}

function fillSingleMapWithPreTrapName(field, playerName){
  var found = 0;
  for(var i = 0; i < field.length; i = i + 1){
     for(var k = 0; k < field[i].length; k = k + 1){
        if(field[i][k]){
          // add hints
          if(parseInt(field[i][k]) > -1){
            

            if(configObject.symbolPatterns[parseInt(field[i][k])]){
              //console.log(parseInt(field[i][k]), configObject.symbolPatterns[parseInt(field[i][k])].name );
              field[i][k] = ''+configObject.symbolPatterns[parseInt(field[i][k])].name;
              playerName.singleHints.push([i,k]);
            }else{
              field[i][k] = -1;
            }
            found++;
          }
          
        }
     }
  }
}


function fillField(field){
  for(var i = 0; i < field.length; i = i + 1){
    for(var k = 0; k < field[i].length; k = k + 1){
      //console.log(field[i][k]);
      if(field[i][k] === -1){
         var tElem = randomElementNotInList();
         //console.log("should be empty", field[i][k]);
         while(!isAlone(tElem, i, k, field)){
           tElem = randomElementNotInList();
         }
         field[i][k] = tElem;
      }
    }
  }
}

function isAlone(word, x, y, field){
  //console.log(word, x, y);

  if(field[x-1] !== undefined && field[x-1][y-1] !== undefined && field[x-1][y-1] === word){
      return false;
  }

  if(field[x-1] !== undefined && field[x-1][y] !== undefined && field[x-1][y] === word){
      return false;
  }

  if(field[x] !== undefined && field[x][y-1] !== undefined && field[x][y-1] === word){
      return false;
  }

  if(field[x] !== undefined && field[x][y+1] !== undefined && field[x][y+1] === word){
      return false;
  }

  if(field[x+1] !== undefined && field[x+1][y-1] !== undefined && field[x+1][y-1] === word){
      return false;
  }

  if(field[x+1] !== undefined && field[x+1][y] !== undefined && field[x+1][y] === word){
      return false;
  }

  return true;
}

function formatToCondition(field){
  var formArray = new Array();
  for(var i = 0; i < field.length; i = i + 1){
    for(var k = 0; k < field[i].length; k = k + 1){
      //console.log(i,k,field[i][k]);
      formArray.push({
        position: [i,k],
        name: field[i][k]
      });
    }
  }

  return formArray;
}

function saveCondition(filename, data){
  fs.writeFile(filename, data, function(err) {
    if(err) {
        return console.log(err);
    }
  });
}
