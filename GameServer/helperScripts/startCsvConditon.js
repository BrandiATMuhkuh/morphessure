var CsvConditionGenerator = require('./csvConditionGenerator.js');

var conditionId = '1';
var pId = '1';
var con = new CsvConditionGenerator(conditionId, pId, function(e){
	console.log("juhu CsvConditionGeneration is done");
});