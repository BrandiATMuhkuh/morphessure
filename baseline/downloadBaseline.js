var http = require('http');
var config = require('./config.json');
var dbSchema = require('./dbSchema.json');
var fs = require("fs");
var csv = require("fast-csv");
var file = "baseline.db";
var exists = fs.existsSync(file);
var randomReplys = {};

/**
Select *, sum/co AS v from (select wordId, valance, image, SUM(valance) AS sum, COUNT(wordId) AS co from valance GROUP BY wordId)

//Select all object with sum and words
select *, sumVal*1.0/counts as sVal from (Select ref, sum(valance) as sumVal, count(ref) as counts from valance LEFT JOIN synonyms ON wordId=qualRef where word = 1  GROUP BY ref);
*/

//read CSV
var count  = 1;
csv
 .fromPath("random_baseline.csv", {headers : true, objectMode:true})
 .on("data", function(data){
    var json = JSON.parse(JSON.stringify(data));
    //console.log(count, json.V1, json['V1'], json["'V1'"], json['DO-Q-Q51']);
      //console.log(json);
      //console.log(json["﻿V1"], json["DO-Q-Q51"].split("|"));
      randomReplys[json["﻿V1"]] = json["DO-Q-Q51"].split("|");
      
    count++;
 })
 .on("end", function(){
     console.log("done", randomReplys["R_2qDzVBcmslgBFiQ"][5]);
 });

console.log(dbSchema);
if(!exists) {
  console.log("Creating DB file.");
  fs.openSync(file, "w");
}

var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database(file);

var _pars = new Array(
  "API_SELECT=ControlPanel&Version=2.3",
  "Request=getLegacyResponseData",
  "User="+config.qualtrics.User,
  "Token="+config.qualtrics.Token,
  "Format=JSON",
  "SurveyID="+config.qualtrics.SurveyID,
  "Labels=0");



//console.log(_pars);

db.serialize(function() {

  //Initialice database schema if not exist
  for(sql in dbSchema){
    db.run(dbSchema[sql]);
  }



});

//db.close();

function addResponse(data){

  var stmt = db.prepare("INSERT OR REPLACE INTO users (id, Finished, Q10, Q12, Q16_1, Q20, Q21_1, Q19) VALUES (?,?,?,?,?,?,?,?)");
  stmt.run(data.id, data.Finished, data.Q10, data.Q12, data.Q16_1, data.Q20, data.Q21_1, data.Q19);
  stmt.finalize();

  var valanceStmt = db.prepare("INSERT OR REPLACE INTO valance (userId, wordId, valance, image) VALUES (?, ?, ?, ?)");
  var tipiStmt = db.prepare("INSERT OR REPLACE INTO TIPI (id, extroversion, agreeableness, conscientiousness, emotionalStability, openness) VALUES (?, ?, ?, ?, ?, ?)");

  var valanceInsert = "INSERT OR REPLACE INTO valance (userId, wordId, valance, image, randpos) VALUES "
  var valanceInsertArra = [];
  var tipiData = {};

  for(var resp in data){
    //console.log(resp, data.length);
    /*
    if(resp.includes('Q2_1')){
      console.log(data.id, resp, data[resp], 1);
      valanceStmt.run(data.id, resp, data[resp], 1);
    }
    */
    if(resp.includes('Q51_1')){
      //console.log(data.id, resp, data[resp], 0);
      //valanceStmt.run(data.id, resp, data[resp], 0);
      if(data[resp]){

        //get rand number
        
        var mPos = parseInt(resp.replace("Q51_1_","")) - 1;
        var p = -1;
        //console.log(mPos);
        if(randomReplys[data.id][mPos] !== undefined){
          p = parseInt(randomReplys[data.id][mPos]);
        }
        if(p === NaN)
          console.log("('"+data.id+"', '"+resp+"', 4, 0, "+p+")");

         valanceInsertArra.push("('"+data.id+"', '"+resp+"', "+data[resp]+", 0, "+p+")");
      }else{
        valanceInsertArra.push("('"+data.id+"', '"+resp+"', 4, 0, -1)");
      }



    }

    //TIPI Calc
    if(resp.includes('Q4_1') ||
    resp.includes('Q4_2') ||
    resp.includes('Q4_3') ||
    resp.includes('Q4_4') ||
    resp.includes('Q4_5') ||
    resp.includes('Q4_6') ||
    resp.includes('Q4_7') ||
    resp.includes('Q4_8') ||
    resp.includes('Q4_9') ||
    resp.includes('Q4_10')){
      //console.log(resp);
      tipiData[resp] = data[resp];
    }
  }


  tipiStmt.run(
    data.id,
    (tipiData['Q4_1']+tipiData['Q4_6'])/2,
    (tipiData['Q4_2']+tipiData['Q4_7'])/2,
    (tipiData['Q4_3']+tipiData['Q4_8'])/2,
    (tipiData['Q4_4']+tipiData['Q4_9'])/2,
    (tipiData['Q4_5']+tipiData['Q4_10'])/2);

    //console.log(valanceInsert + " "+ valanceInsertArra.join());
    db.run(valanceInsert + " "+ valanceInsertArra.join());
  //valanceStmt.finalize();
  tipiStmt.finalize();

}


console.log("http://canterbury.qualtrics.com/WRAPI/ControlPanel/api.php?"+_pars.join("&"));
http.get("http://canterbury.qualtrics.com/WRAPI/ControlPanel/api.php?"+_pars.join("&"), function(res) {
  console.log("Got response: " + res.statusCode);
  var str = '';
  res.on("data", function(chunk) {
    str += chunk;
  });

  res.on("end", function() {
    //console.log("end: " + str);
    var obj = JSON.parse( str );
    //console.log(obj);

    for(a in obj){
      //console.log(a);
      obj[a].id = a;
      addResponse(obj[a]);
    }

  });

}).on('error', function(e) {
  console.log("Got error: " + e.message);
});
