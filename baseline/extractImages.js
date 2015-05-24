var fs = require('fs');
var file = "baseline.db";
var exists = fs.existsSync(file);
if(!exists) {
  console.log("Creating DB file.");
  fs.openSync(file, "w");
}

var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database(file);
var survey = null;

fs.readFile( __dirname + '/NameImages.qsf', function (err, data) {
  if (err) {
    throw err;
  }
  survey = JSON.parse(data.toString())

  //var choices = [];
  //var orders = survey.SurveyElements[9].Payload.ChoiceOrder;
  var se = survey.SurveyElements;

  //console.log(se);

  var stmt = db.prepare("INSERT INTO wordToImage VALUES (?,?)");
  for(s in se){
    //console.log('=========================================');
    if(se[s].Payload !== null && se[s].Payload.DataExportTag !== undefined){
      console.log('++++++++++++++++++++++++++++++++++++++++');
      console.log(s, se[s].Payload.DataExportTag);
      console.log(s, se[s].Payload.QuestionText);

      //stmt.run(se[s].Payload.DataExportTag,se[s].Ppintayload.QuestionText);

    }
  }
  //stmt.finalize();



});
