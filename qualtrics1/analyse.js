var onlyData = require('./convertcsv.json');
var fs = require('fs');

var onlyHeadline;
var listOfWords = {};
var sumListOfWords = {};

function headAndTow(){
	onlyHeadline = onlyData.splice(0,1);
	onlyHeadline = onlyHeadline[0];
}

function removeRequestion(item, value){

	var found = null;
	for(var i = 0; i < onlyData.length; i++){
		//console.log(i);
		//console.log(onlyData[i][item]);
		if(onlyData[i][item] == value){
			//console.log("found");
			found = i;
			break;
		}
	}

	//console.log(found);

	if(found != null){
		onlyData.splice(found,1);
	}
	
}

function findWordHeadlines(){
	//console.log(onlyHeadline);
	for (a in onlyHeadline){
		//console.log(a);
		if(onlyHeadline[a] == " -Answer1" ||
			onlyHeadline[a] == " -Answer2" ||
			onlyHeadline[a] == " -Answer3" ||
			onlyHeadline[a] == " -Answer4" ||
			onlyHeadline[a] == " -Answer5" ||
			onlyHeadline[a] == " -Answer6"){
			//console.log(a);
			var w = a.split("_")[0];
			//console.log(w);

			//add to listOfWords
			if (listOfWords[w] == undefined){
				listOfWords[w] = [];
				sumListOfWords[w] = {};
			} 
		}
	}
}


function fillListOfWords(){
	for(w in listOfWords){
		for(p in onlyData){
			if(onlyData[p][w+"_1_TEXT"]!=""){
				listOfWords[w].push((""+onlyData[p][w+"_1_TEXT"]).trim().toLowerCase());
			}

			if(onlyData[p][w+"_2_TEXT"]!=""){
				listOfWords[w].push((""+onlyData[p][w+"_2_TEXT"]).trim().toLowerCase());
			}

			if(onlyData[p][w+"_3_TEXT"]!=""){
				listOfWords[w].push((""+onlyData[p][w+"_3_TEXT"]).trim().toLowerCase());
			}

			if(onlyData[p][w+"_4_TEXT"]!=""){
				listOfWords[w].push((""+onlyData[p][w+"_4_TEXT"]).trim().toLowerCase());
			}

			if(onlyData[p][w+"_5_TEXT"]!=""){
				listOfWords[w].push((""+onlyData[p][w+"_5_TEXT"]).trim().toLowerCase());
			}

			if(onlyData[p][w+"_6_TEXT"]!=""){
				listOfWords[w].push((""+onlyData[p][w+"_6_TEXT"]).trim().toLowerCase());
			}
		}
	}
}

function createSummary(input){
	var summary = {};
	var item = '';
	for ( i in input){
	    item = input[i];
	    if(summary[item]){
	        summary[item] += 1;
	    }
	    else{
	        summary[item] = 1;
	    }
	}

	return summary;
}

function createOverAllSummary(){
	for (a in sumListOfWords){
		//console.log(a, createSummary(listOfWords[a]));
		sumListOfWords[a] = createSummary(listOfWords[a]);
	}
}

function saveFile(text){
	fs.writeFile("histogram.json", text, function(err) {
	    if(err) {
	        console.log(err);
	    } else {
	        console.log("The file was saved!");
	    }
	}); 
}

function sumListToEasyReadText(){
	//JSON.stringify(sumListOfWords)
	var text = '';

	for(a in sumListOfWords){
		//console.log(JSON.stringify(sumListOfWords[a]));
		text += a + " --> " + JSON.stringify(sumListOfWords[a]);
		text += "\n";
	}

	return text;
}




//console.log(con.length);
headAndTow();
//console.log(onlyHeadline.length);
//console.log(onlyData.length);

//remove not finished responses
removeRequestion("V1", "R_271oCLPmhnOq5Gx");
removeRequestion("V1", "R_3PyMEUjFHWeEaG4");
removeRequestion("V1", "R_2tLDReBYQNZj2tr");
removeRequestion("V1", "R_bHQMdgUZ5v2Y7Bf");

console.log(onlyData.length);

findWordHeadlines();
fillListOfWords();
console.log(listOfWords);

createOverAllSummary();
console.log(sumListOfWords);
saveFile(sumListToEasyReadText());


