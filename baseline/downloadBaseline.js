var http = require('http');
var config = require('./config.json');
var dbSchema = require('./dbSchema.json');
var fs = require("fs");
var file = "baseline.db";
var exists = fs.existsSync(file);

/**
Select *, sum/co AS v from (select wordId, valance, image, SUM(valance) AS sum, COUNT(wordId) AS co from valance GROUP BY wordId)

//Select all object with sum and words
select *, sumVal*1.0/counts as sVal from (Select ref, sum(valance) as sumVal, count(ref) as counts from valance LEFT JOIN synonyms ON wordId=qualRef where word = 1  GROUP BY ref);
*/


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

  var tipiData = {};

  for(var resp in data){
    console.log(resp);
    if(resp.includes('Q2_1')){
      console.log(resp);
      //valanceStmt.run(data.id, resp, data[resp], 1);
    }

    if(resp.includes('Q5_1')){
      console.log(resp);
      //valanceStmt.run(data.id, resp, data[resp], 0);
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
      console.log(resp);
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

  valanceStmt.finalize();
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
    console.log(obj);

    for(a in obj){
      console.log(a);
      obj[a].id = a;
      addResponse(obj[a]);
    }

  });

}).on('error', function(e) {
  console.log("Got error: " + e.message);
});
