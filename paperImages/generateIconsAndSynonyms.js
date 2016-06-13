var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('../GameServer/server/conditions/condition1B.js', 'utf8'));
var imgUrl = JSON.parse(fs.readFileSync('./imagesToCCLink.js', 'utf8'));

//console.log("time to create CSV from syn words", obj.levels.multiPlayer.fields[1]);

var trapList = null;
var hintWord = null;
var hintList = null;
var allImages = {};

function getImgAndWordOfPos(pos){

  var wordList = hintWord[pos];
  //console.log(hintList[pos]);
  var image = null;

  for (var i = 0; i < trapList.length; i++) {
    //console.log(trapList[i].position);
    if(trapList[i].position[0] == hintList[pos][0] && trapList[i].position[1] == hintList[pos][1]){
      image = trapList[i].name;
      break;
    }
  }

  var link = imgUrl[image];

  return {
    image:image,
    wordList:wordList,
    link: link
  }
}

function loadAllImages(){
  for (var k = 0; k < 2; k++) {
    trapList = obj.levels.multiPlayer.fields[k].trapList;
    hintWord = obj.levels.multiPlayer.fields[k].hintWord;
    hintList = obj.levels.multiPlayer.fields[k].hintList;

    for (var i = 0; i < hintWord.length-1; i++) {
      //console.log(i,getImgAndWordOfPos(i));
      var t = getImgAndWordOfPos(i);
      if(t.image !== "NA"){
        allImages[t.image] = t;
      }

    }
  }

}

var tableString = `
<style>
table, td, th {
    border: 1px solid black;
    padding: 2px;
}

table {
    border-collapse: collapse;
    width: 100%;
}

th {
    text-align: left;
}
</style>
  <table>
  <tr>
    <th>Symbols</th>
    <th>Synonyms</th>
    <th>Reference</th>
  </tr>`;



function generateTable(){


  var keys = Object.keys(allImages);
  //console.log(keys);
  for (key of keys) {
    //allImages[key];
    var wList = allImages[key].wordList;
    var formatedWordList = "";
    for (var m = 0; m < wList.length; m++) {
      //array[i]
      formatedWordList += wList[m];
      if(m < 2){
        formatedWordList += ` [CHOICE ${m+1}]`;
      }
      formatedWordList += "<br \>";
    }


    tableString +=
    `<tr>
      <td><img src="../GameServer/app/assets/traps/${allImages[key].image}.png" style="width:60px;height:60px;"></td>
      <td>${formatedWordList}</td>
      <td><a href="${allImages[key].link}">${allImages[key].link}</a></td>
    </tr>`;
  }

}



loadAllImages();
generateTable()
tableString += `</table>`;
//console.log(allImages);
fs.writeFile("IconsAndSynonyms.html", tableString,null);
