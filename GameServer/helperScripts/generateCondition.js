require('./../app/assets/Assets.js');
var template = require("./condition_template.js");
var fs = require('fs');
var x = 10; //The maximul number of columns
var y = 80; //The number of rows
var traps = Assets.traps; // all traps
var field2 = new Array(y);

var configObject = {
   playerNames: [{name: "player1", map:[], gap:0, field : new Array(y), hints:[]}, {name: "player2", map:[], gap:0, field : new Array(y), hints:[]}],
   symbolPatterns: [
      {name: "belly", pos:0, gap: 10, pattern: [{name:"player1", pos:null}, {name:"player1", pos:null}, {name:"player2", pos:null}, {name:"player1", pos:null}]},
      {name: "car", pos:0, gap: 10, pattern: [{name:"player1", pos:null}, {name:"player1", pos:null}, {name:"player2", pos:null}, {name:"player1", pos:null}]},
      {name: "knife", pos:0, gap: 10, pattern: [{name:"player1", pos:null}, {name:"player1", pos:null}, {name:"player2", pos:null}, {name:"player1", pos:null}]},
      {name: "snack", pos:0, gap: 10, pattern: [{name:"player2", pos:null}, {name:"player2", pos:null}, {name:"player2", pos:null}, {name:"player2", pos:null}]}
   ],
   gap: 3,
   maxMapLength: 60
};



//console.log(traps);
genManipulationMap();
for(var i = 0; i < configObject.playerNames.length; i++){
   var fi = configObject.playerNames[i].field;
   generateEmptyField(fi);

   fillMapWithPreTrap(fi, configObject.playerNames[i]);
   //console.log(fi);
   fillField(fi);
   //console.log(formatToCondition(fi));
   //console.log(template.levels.multiPlayer);
   var mp = getPlayerFromTemplater(configObject.playerNames[i].name, "multiPlayer");
   mp.hintList = configObject.playerNames[i].hints;
   mp.trapList = formatToCondition(fi);
   //console.log(mp.trapList);
}
//console.log(formatToCondition(configObject.playerNames[1].field));
saveCondition("condition_test.json", JSON.stringify(template, null, '\t'));

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

function fillMapWithPreTrap(field, playerName){
   var forward = false;
   var n = 0
   for(var i=1;i < y;i = i + 1){

      if(i%2 == 1){
         forward = !forward;
         if(forward){
            field[i][1] = ""+n;
            n++;
         }else{
            field[i][8] = ""+n;
            n++;
         }
      }else{
         if(forward){
            for(var b=1; b<8;b=b+1){
               field[i][b] = ""+n;
               n++;
            }
         }else{
            for(var b=1; b<8;b=b+1){
               field[i][8-b] = ""+n;
               n++;
            }
         }
      }
   }

   //console.log(field);
   //add read VALUES
   for(var i = 0; i < field.length; i = i + 1){
     for(var k = 0; k < field[i].length; k = k + 1){
        if(field[i][k]){
          // add hints
          if(parseInt(field[i][k]) > -1){
            playerName.hints.push([i,k]);
            console.log(parseInt(field[i][k]));
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
