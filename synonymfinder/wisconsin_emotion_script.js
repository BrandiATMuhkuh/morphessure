/**
 * This it the first syn finder and works with the wisconsin_emotion list
 */
var fs = require('fs');
var parse = require('csv-parse');
var transform = require('stream-transform');
var thesaurus = require("thesaurus");

var fullOutput;
var searchAbleWordArray = [];
var foundSynList = {};

fs = require('fs')
fs.readFile('wisconsin_emotion.csv', 'utf8', function (err,data) {
	if (err) {
		return console.log(err);
	}

	
	parse(data, {comment: '#'}, function(err, output){

		//Remove first item
		output.splice(0,1);
		
		fullOutput = output;
		//create Searchable array
		for (word in output){
			//console.log(output[word][0]);
			searchAbleWordArray.push(output[word][0])
		}
		//console.log(searchAbleWordArray);

		findSyn(searchAbleWordArray);
		beoutyPrint();
		//console.log(foundSynList);
	});

});

function findSyn(word){
	for (word in searchAbleWordArray){
		//console.log(searchAbleWordArray[word]);
		//console.log(thesaurus.find(searchAbleWordArray[word]));
		addFoundSyn(searchAbleWordArray[word], thesaurus.find(searchAbleWordArray[word]))
	}
}

function beoutyPrint(){
	
	var allString = '';
	for(word in foundSynList){
		var outString = "---------------------------\n";

		var obj = foundSynList[word];
		outString+=obj.word[0]+ ", " + obj.word[1];
		outString+="\n";


		for(a in obj.syns){

			outString+=obj.syns[a][0]+ ", " + obj.syns[a][1];
			outString+="\n";
		}


		
		//console.log(outString);
		allString+=outString;
	}

	console.log(allString);
	saveFile(allString);

}


function addFoundSyn(word, synonys){
	//console.log(word)

	for(syn in synonys){
		//synonys[syn];
		var index = searchAbleWordArray.indexOf(synonys[syn]);
		if(index != -1){
			if(foundSynList[word] == undefined){
				foundSynList[word]={"syns":[], "count":0, "word":{}};
			}
			//console.log(fullOutput[index]);
			foundSynList[word].syns.push(fullOutput[index]);
			foundSynList[word].word = fullOutput[searchAbleWordArray.indexOf(word)];
			//console.log(word, searchAbleWordArray[index], fullOutput[index]);

		}
	}

	if(foundSynList[word] != undefined){
		foundSynList[word].count = foundSynList[word].syns.length;
	}


}

function saveFile(text){
	fs.writeFile("wisconsin_emotion_synonyms.txt", text, function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
    }
	}); 
}