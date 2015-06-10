/**
* This file will generate a random map with whatever dimentions you set.
* The script will also take care that 2 similar object can never be reached
* from one position.
**/

require('./../app/assets/Assets.js');
var fs = require('fs');
var x = 10; //The maximul number of columns
var y = 80; //The number of rows
var traps = Assets.traps; // all traps
var field = new Array(y);
//console.log(traps);

generateEmptyField();
fillField();
console.log(formatToCondition());
saveCondition("test.json", JSON.stringify(formatToCondition(), null, '\t'));


//console.log(field);

function generateEmptyField(){
  for(var i = 0; i < field.length; i = i + 1){
    field[i] = new Array(x);
  }
}

function randomTrapElement(){
  return traps[Math.floor(Math.random()*traps.length)];
}

function isAlone(word, x, y){
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

function fillField(){
  for(var i = 0; i < field.length; i = i + 1){
    for(var k = 0; k < field[i].length; k = k + 1){
      var tElem = randomTrapElement();
      while(!isAlone(tElem, i, k)){
        tElem = randomTrapElement();
      }
      field[i][k] = tElem;

    }
  }
}

function formatToCondition(){
  var formArray = new Array();
  for(var i = 0; i < field.length; i = i + 1){
    for(var k = 0; k < field[i].length; k = k + 1){
      console.log(i,k,field[i][k]);
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
