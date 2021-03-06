console.log("load baseline.qsf and add stuff")

var startTime = new Date();
var fs = require('fs');
var file = "baseline.db";
var exists = fs.existsSync(file);
if (!exists) {
  console.log("Creating DB file.");
  fs.openSync(file, "w");
}

var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database(file);
var survey = null;

function generate(dataString){
  survey = JSON.parse(dataString.toString());

  //change name to baseline_gen
  survey.SurveyEntry.SurveyName = "baseline_gen";

  var choices = [];
  var orderId = getIdOfName(survey.SurveyElements, "Q51");
  var orders = survey.SurveyElements[orderId].Payload.ChoiceOrder = [];
  choices.push(survey.SurveyElements[orderId].Payload.Choices);
  choices.push(survey.SurveyElements[orderId].Payload.AdditionalQuestions["1"].Choices);
  //choices.push(survey.SurveyElements[9].Payload.AdditionalQuestions["2"].Choices);

/*
  var imgChoices = [];
  var imgOrderId = getIdOfName(survey.SurveyElements, "Q50");
  var imgOrders = survey.SurveyElements[imgOrderId].Payload.ChoiceOrder = [];

  imgChoices.push(survey.SurveyElements[imgOrderId].Payload.Choices);
  imgChoices.push(survey.SurveyElements[imgOrderId].Payload.AdditionalQuestions["1"].Choices);
  //imgChoices.push(survey.SurveyElements[7].Payload.AdditionalQuestions["2"].Choices);
  //imgChoices.push(survey.SurveyElements[7].Payload.AdditionalQuestions["3"].Choices);
*/



  var synCount = 1;
  var imgCount = 1;


  var qaulLink = db.prepare("UPDATE synonyms SET qualRef = ? WHERE ROWID = ?");
  db.each("select *, synonyms.ROWID AS id from synonyms LEFT JOIN wordToImage ON LOWER(synonyms.ref) = LOWER(wordToImage.imgword)", function(err, row) {
    console.log(row.id);

    if (row.word === 1) {
      for (var c in choices) {
        choices[c]["" + synCount] = {
          "Display": row.name
        };

        qaulLink.run("Q51_1_" + synCount, row.id);
      }

      orders.push(synCount);
      synCount = synCount + 1;
    }

    /*
    if (row.word === 0) {
      for (var c in imgChoices) {
        imgChoices[c]["" + imgCount] = {
          "Display": row.img
        };

        if (row.img === null) {
          console.log(row.name, row.ref);
        }

        qaulLink.run("Q2_1_" + imgCount, row.id);
        //console.log(row.img);
      }

      imgOrders.push(imgCount);
      imgCount = imgCount + 1;
    }
    */


    //console.log(choices);
    //return choices;
  }, function() {

    //console.log("done", choices);
    qaulLink.finalize(function(){
      console.log("Time to finalize: ", (new Date() - startTime)/1000);
    });

    fs.writeFile("baseline_gen.qsf", JSON.stringify(survey), function(err) {
      if (err) {
        return console.log(err);
      }

      console.log("Time to genereate: ", (new Date() - startTime)/1000, "Please keep waiting until DB writing is done!");
    });
  });
}

generate(fs.readFileSync(__dirname + '/baseline_template.qsf'));
/*
fs.readFile(__dirname + '/baseline_template.qsf', function(err, data) {
  if (err) {
    throw err;
  }
  generate(data);
});*/

function getIdOfName(arr, name){
	for (var i=0;i<arr.length; i = i + 1){
		if(arr[i].Payload !== undefined && arr[i].Payload !== null){
			if(arr[i].Payload.DataExportTag !== undefined && arr[i].Payload.DataExportTag !== null){
				if(arr[i].Payload.DataExportTag === name){
					console.log(i,arr[i].Payload.DataExportTag);
					return i;
				}
			}
		}
	}

}
