console.log("load baseline.qsf and add stuff")

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


fs.readFile( __dirname + '/baseline.qsf', function (err, data) {
  if (err) {
    throw err;
  }
  survey = JSON.parse(data.toString())

  var choices = [];
  var orders = survey.SurveyElements[9].Payload.ChoiceOrder = [];

  choices.push(survey.SurveyElements[9].Payload.Choices);
  choices.push(survey.SurveyElements[9].Payload.AdditionalQuestions["1"].Choices);
  choices.push(survey.SurveyElements[9].Payload.AdditionalQuestions["2"].Choices);

  var imgChoices = [];
  var imgOrders = survey.SurveyElements[7].Payload.ChoiceOrder = [];

  imgChoices.push(survey.SurveyElements[7].Payload.Choices);
  imgChoices.push(survey.SurveyElements[7].Payload.AdditionalQuestions["1"].Choices);
  imgChoices.push(survey.SurveyElements[7].Payload.AdditionalQuestions["2"].Choices);
  imgChoices.push(survey.SurveyElements[7].Payload.AdditionalQuestions["3"].Choices);




  var synCount = 1;
  var imgCount = 1;


  var qaulLink = db.prepare("UPDATE synonyms SET qualRef = ? WHERE ROWID = ?");
  db.each("select *, synonyms.ROWID AS id from synonyms LEFT JOIN wordToImage ON LOWER(synonyms.ref) = LOWER(wordToImage.imgword)", function(err, row) {
      console.log(row.id);

      if(row.word === 1){
        for(var c in choices){
          choices[c][""+synCount] = {
            "Display" : row.name
          };

          qaulLink.run("Q5_1_"+synCount, row.id);
        }

        orders.push(synCount);
        synCount = synCount + 1;
      }

      if(row.word === 0){
        for(var c in imgChoices){
          imgChoices[c][""+imgCount] = {
            "Display" : row.img
          };

          if(row.img === null){
            console.log(row.name, row.ref);
          }

          qaulLink.run("Q2_1_"+imgCount, row.id);
          //console.log(row.img);
        }

        imgOrders.push(imgCount);
        imgCount = imgCount + 1;
      }


      //console.log(choices);
      //return choices;
  }, function (){

    //console.log("done", choices);
    qaulLink.finalize();
    fs.writeFile("baseline_gen.qsf", JSON.stringify(survey), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});
  });


});
