//csvConditionGenerator.js
//console.log("test");
var sqMem = require("sqlite3").verbose();
var template = require("./condition_generated.js");
var dbMem = new sqMem.Database(':memory:');
//var dbMem = new sqMem.Database('memory.sqlite');
var csv = require("fast-csv");
var fs = require("fs");

//import Servery
var survey = JSON.parse(fs.readFileSync(__dirname + '/mainBefore_template.qsf').toString());
var after_survey = JSON.parse(fs.readFileSync(__dirname + '/mainAfter_template.qsf').toString());
survey.SurveyEntry.SurveyName = "mainBefore_gen";
after_survey.SurveyEntry.SurveyName = "mainAfter_gen";

var orderId = getIdOfName(survey.SurveyElements, "Q24");
var orders = survey.SurveyElements[orderId].Payload.ChoiceOrder = [];
var choices = survey.SurveyElements[orderId].Payload.Choices = {};

var after_orderId = getIdOfName(after_survey.SurveyElements, "Q24");

var after_orders = after_survey.SurveyElements[after_orderId].Payload.ChoiceOrder = [];
var after_choices = after_survey.SurveyElements[after_orderId].Payload.Choices = {};

var csvStream = csv.format({headers: true});
var writableStream = fs.createWriteStream("qualtToRef.csv");

csvStream.pipe(writableStream);



function addChoice(cho, ord, index, imageText){
	//console.log(cho);
	var i = ''+index;
	ord.push(i);
	var a = {};
	//a[i]={"Display": imageText};
	//console.log(i, {"Display": imageText});
	cho[i] = {"Display": imageText};
}

dbMem.serialize(function() {

	dbMem.run('create table test2 (item text, stimulusType text, option1 text, option2 text, change text, navigator text, phase text, presentation text, mindex integer);');
	dbMem.run('create table wordToImage (imgword text, img text);');
	var stmt = dbMem.prepare("INSERT INTO test2 VALUES (?,?,?,?,?,?,?,?,?)");
	var stmt2 = dbMem.prepare("INSERT INTO wordToImage VALUES (?,?)");

	
	csv
	 .fromPath("condition1.csv", {headers : true, objectMode:true})
	 .on("data", function(data){
		//console.log(data);    
	    stmt.run(data.item, data.stimulusType, data.option1, data.option2, data.change, data.navigator, data.phase, data.presentation, data.index);
	    
	 })
	 .on("end", function(){
	     console.log("done");
	     stmt.finalize();
	     x();
	     //console.log(template.levels.singlePlayer);

	 });

	 function x(){
	 	//import word to image


		csv
		 .fromPath("wordToImage.csv", {headers : true, objectMode:true})
		 .on("data", function(data){
			//console.log(data);    
		    stmt2.run(data.imgword, data.img);
		    
		 })
		 .on("end", function(){
		     console.log("done");
		     stmt2.finalize();
		     a();
		     //console.log(template.levels.singlePlayer);

		 });
	 }

	
	 function a (){
	 	console.log("create SinglePlayer");
	 	var mCount = 1;
		dbMem.each("select img, imgword from test2 LEFT JOIN wordToImage on test2.item = wordToImage.imgword where presentation = 'pre' and phase = 'valence_test' order by mindex ASC", function(err, row) {
			//console.log(mCount, row.img, row.imgword);
			csvStream.write({position: "pre", qualRef: mCount, ref: row.imgword});
			addChoice(choices, orders, mCount, row.img);
			mCount++;
		}, 
		function(d){
			console.log("i'm done in A");
			b();
		});
	 }

	 function b (){
	 	console.log("create SinglePlayer");
	 	var mCount = 1;
		dbMem.each("select img, imgword from test2 LEFT JOIN wordToImage on test2.item = wordToImage.imgword where presentation = 'post' and phase = 'valence_test' order by mindex ASC", function(err, row) {
			//console.log(mCount, row.item);
			csvStream.write({position: "post", qualRef: mCount, ref: row.imgword});
			addChoice(after_choices, after_orders, mCount, row.img);
			mCount++;
		}, 
		function(d){
			console.log("i'm done in A");
			finish();
			csvStream.end();
		});
	 }

	 function finish(){
	 	console.log("finish");
	 	saveCondition("mainBefore_gen.qsf", JSON.stringify(survey, null, '\t'));
	 	saveCondition("mainAfter_gen.qsf", JSON.stringify(after_survey, null, '\t'));
	 }

	 

	
});

function setHintWord(level, player, index, hintWords){
	index = parseInt(index);
	var f = getFields(level, player);
	//console.log(level,player,index, hintWords);
	f.hintWord[index] = hintWords;
	//console.log(index, f.hintWord[index]);
}

function setHintImage(level, player, index, image){
	index = parseInt(index);
	var f = getFields(level, player);
	//console.log(f.hintList[index]);
	//console.log(level,player,index, image);
	//console.log(getTrap(f.trapList, f.hintList[index]));
	var mtrap = getTrap(f.trapList, f.hintList[index]);
	mtrap.name = image;
	//console.log(mtrap);
}

function getFields(level, player){
	//console.log(level, player);
	var a = template.levels[level].fields;
	//console.log(a);
	for(var m=0;m<a.length;m++){
		if(a[m].playerName === player){
			return a[m];
		}
		//console.log(a.length, a[m].playerName);
	}

	return null;
}

function getTrap(trapList, hintPost){
	//console.log("getTrap", trapList, hintPost);

	for(var i = 0; i < trapList.length; i++){
		//console.log(hintPost, trapList[i].position[0], trapList[i].position[1]);
		if(hintPost[0]  === trapList[i].position[0] && hintPost[1]  === trapList[i].position[1]){
			return trapList[i];
		}
	}

	return null;
}

function saveCondition(filename, data){
  fs.writeFile(filename, data, function(err) {
    if(err) {
        return console.log(err);
    }
  });
}

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