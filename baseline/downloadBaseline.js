var http = require('http');
var config = require('./config.json');
var dbSchema = require('./dbSchema.json');
var fs = require("fs");
var file = "baseline.db";
var exists = fs.existsSync(file);

/**
Select *, sum/co AS v from (select wordId, valance, image, SUM(valance) AS sum, COUNT(wordId) AS co from valance GROUP BY wordId)

//Select all object with sum and words
Select *, sum/co AS v from (select wordId, valance, image, SUM(valance) AS sum, COUNT(wordId) AS co from valance GROUP BY wordId) LEFT JOIN synonyms ON wordId=qualRef
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
  for(var resp in data){

    if(resp.includes('Q2_1')){
      console.log(resp);
      valanceStmt.run(data.id, resp, data[resp], 1);
    }

    if(resp.includes('Q5_1')){
      console.log(resp);
      valanceStmt.run(data.id, resp, data[resp], 0);
    }
  }

  valanceStmt.finalize();




}



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
