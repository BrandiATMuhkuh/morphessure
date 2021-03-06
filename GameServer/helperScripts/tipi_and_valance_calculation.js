/**
 * this script will use "mainBefore_gen.csv" and "mainAfter_gen.csv" to calculate
 * the TIPI test valance score 
 * 
 * ToDo before you start
 * Remove second line from "mainBefore_gen.csv" and "mainAfter_gen.csv" since it
 * seems like it has two headers. 
 * 
 * 
 * */


/**
 * Load the csv file
 */

//Converter Class 
var json2csv = require('json2csv');
var sqMem = require("sqlite3").verbose();
var dbMem = new sqMem.Database(':memory:');
var fs = require("fs");

var Converter = require("csvtojson").Converter;

 
function csv2Json(filename){
	return new Promise(function(resolve, reject) {
		var converter = new Converter({});
		//end_parsed will be emitted once parsing finished 
		converter.on("end_parsed", function (jsonArray) {
			addToDb(jsonArray, filename, resolve);
		}); 
		//read from file 
		fs.createReadStream(filename).pipe(converter);		
	});
	
	
}

function addToDb(csvData, tableName, callback){
	//check if we actually have data
	if(csvData.length <= 0){
		return;
	}
	
	
	dbMem.serialize(function() {
		var header = Object.keys(csvData[0]);
		var insertState = 'INSERT INTO "'+tableName +'" VALUES (';
		var sqlCreateText = 'create table "'+tableName +'" (';
		for (var i = 0; i < header.length-1; i = i + 1) {
			//console.log(header[i]);
			sqlCreateText += '"'+ header[i]+'" text';
			insertState+='?';
			if(i < header.length-2){
				sqlCreateText+=', ';
				insertState+=', ';
			}
		}
		sqlCreateText += ');';
		insertState += ');';
		
		dbMem.run(sqlCreateText);//create table

		var stmt = dbMem.prepare(insertState);

		
		//fill table
		for(var k = 0; k < csvData.length; k = k + 1){

			var line = csvData[k];
			var dataArray = [];
			for (var i = 0; i < header.length-1; i = i + 1) {

				dataArray.push(line[header[i]]);
			}

			stmt.run(dataArray);
		}
		
		console.log("finished adding to table: ", tableName);
				
		callback(true);
	});
	

}

/**
 * Overwrites obj1's values with obj2's and adds obj2's if non existent in obj1
 * @param obj1
 * @param obj2
 * @returns obj3 a new object based on obj1 and obj2
 */
function merge_options(obj1,obj2){
    var obj3 = {};
    for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
    for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
    return obj3;
}

/**
 * 
 * full = true:  if full tipi is not caluated and all values are given back direclty
 **/
function calcTIPI(full, row){
	
	var extroverted = parseInt(row['Q4_1']);
	var reserved = parseInt(row['Q4_6']);
	var critical = parseInt(row['Q4_2']);
	var sympathetic = parseInt(row['Q4_7']);
	var deprendable = parseInt(row['Q4_3']);
	var disorganized = parseInt(row['Q4_8']);
	var anxious = parseInt(row['Q4_4']);
	var calm = parseInt(row['Q4_9']);
	var open = parseInt(row['Q4_5']);
	var conventional = parseInt(row['Q4_10']);
	
	if(full === true){
		return {
			extroverted:extroverted, 
			critical:critical, 
			deprendable:deprendable, 
			anxious:anxious, 
			open:open, 
			reserved:reserved, 
			sympathetic:sympathetic, 
			disorganized:disorganized, 
			calm:calm, 
			conventional:conventional
		}
	}
	
	
	return {
	extroversion: (extroverted+8-reserved)/2,
    agreeableness: (critical+8-sympathetic)/2,
    conscientiousness: (deprendable+8-disorganized)/2,
    emotionalStable: (anxious+8-calm)/2,
    openness: (open+8-conventional)/2};
}

function getDemographics(row){
	
	return {
		interactedWithRobot: row['Q10'], 
		gender: row['Q12'],
		age: row['Q16_1'],
		englishFirst: row['Q20'], 
		education: row['Q19'],
		study: row['Q14'],
	}
	
}

function getAllTIPIs(tableName){
	return new Promise(function(resolve, reject){
		console.log("calcuationTiPi");
		
		dbMem.serialize(function() {
		
			dbMem.all('select * from "'+tableName+'" where V1 != "R_31shGdBgwNaheeX" and Q21 != "999999"', function(err, rows){
				
				var tipiDate = [];
				for(var row of rows){
					console.log(row);
					var t = calcTIPI(false, row);
					t.pId = row['Q21'];
					//t.push(getDemographics(row));
					t = merge_options(t, getDemographics(row));
					tipiDate.push(t);
				}
				var fields = Object.keys(tipiDate[0]);
				
				//Tipi pure
				
				
				json2csv({ data: tipiDate, fields: fields }, function(err, csv) {
					if (err) console.log(err);
					fs.writeFile('tipi.'+tableName, csv, function(err) {
						if (err) throw err;
						console.log('saved tipi.csv file');
						resolve(true);
					});
				});
			});
		
		});
	});
}


function individualValanceShift(){
	return new Promise(function(resolve, reject){
		
		dbMem.serialize(function() {
			
			var pre = null;
			var post = null;
			var qualRef = null;
			new Promise(function(resolve, reject){
					dbMem.all('select  a.position as ap, a.qualRef as aq, a.ref as ar, b.position as bp, b.qualRef as bq, b.ref as br from ( select * from "qualtToRef.csv" where position="post") as a INNER JOIN (select * from "qualtToRef.csv" where position="pre") as b ON a.ref=b.ref', function(err, rows){
					qualRef = rows;
					//console.log(rows);
					resolve();
				});
			})
			.then(function(){
				var selectString = '';
				//console.log(qualRef.length);
				//var r = qualRef[0];
				
				selectString+='pre.Q21 as pId, ';
				
				for(var r of qualRef){
					selectString+='"'+r.ar+'" as "'+r.ar+'", ';
					selectString+='CAST(pre.Q24_'+r.bq+' AS INT) as "'+r.ar+'_pre", ';
					selectString+='CAST(post.Q24_'+r.aq+' AS INT) as "'+r.ar+'_post", ';
					selectString+='CAST(post.Q24_'+r.aq+' AS INT) - CAST(pre.Q24_'+r.bq+' AS INT) as "'+r.ar+'_calc", ';
					
					//break;	
				}
				
				selectString+='1=1 as forgetThis';
				
				//console.log(selectString);
				var preDb = '(select * from "mainBefore_gen.csv" where V1 != "R_31shGdBgwNaheeX" and Q21 != "999999") as pre';
				var postDb = '(select * from "mainAfter_gen.csv" where V1 != "R_31shGdBgwNaheeX" and Q21 != "999999") as post';
				var j = 'select '+selectString+' from '+preDb+' INNER JOIN '+postDb+' on pre.Q21 = post.Q21';
				//console.log(j);
				
				dbMem.all(j, function(err, rows){
					//console.log(rows[0]);
					var vertField = ["pId", "item", "pre_score", "post_score", "calc"];
					var vertRows = [];
					
					for(var mr of rows){
						for(var r of qualRef){
							vertRows.push({
								pId:mr["pId"],
								item:mr[r.ar],
								pre_score:mr[r.ar+"_pre"],
								post_score: mr[r.ar+"_post"],
								calc: mr[r.ar+"_calc"]
							});
						}
					}
					
					
					
					
					//time to save data
					var fields = Object.keys(rows[0]);
					//console.log(fields);
					json2csv({ data: rows, fields: fields }, function(err, csv) {
						if (err) console.log(err);
						fs.writeFile('individualValanceShift.csv', csv, function(err) {
							if (err) throw err;
							console.log('saved individualValanceShift.csv file');
							//saver vertically
							json2csv({ data: vertRows, fields: vertField }, function(err, csv) {
								if (err) console.log(err);
								fs.writeFile('individualVerticalValanceShift.csv', csv, function(err) {
									if (err) throw err;
									console.log('saved individualVerticalValanceShift.csv file');
									resolve(true);
								});
							});
						});
					});
					
				});
				
			});

		});
		
	});
}


function valanceShift(){
	return new Promise(function(resolve, reject){
		
		dbMem.all('select * from "qualtToRef.csv" where position="post"', function(err, rows){
			//select sum(extroversion) as extroversion, sum(extroversion)/count(extroversion) as av from tipI
			var sqlReq='select ';
			for(var row of rows){
				sqlReq+='"'+row.ref+'" as "'+row.ref+'", ';
				sqlReq+='sum("'+row.ref+'_pre") as "'+row.ref+'_pre_sum", ';
				sqlReq+='sum("'+row.ref+'_post") as "'+row.ref+'_post_sum", ';
				sqlReq+='sum("'+row.ref+'_calc") as "'+row.ref+'_diff", ';
				sqlReq+='round(sum(CAST("'+row.ref+'_calc" AS float))/count(CAST("'+row.ref+'_calc" AS float)), 3) as "'+row.ref+'_average", ';
				//console.log(row.ref+"_calc");
				//break;
			}
			
			sqlReq+='1=1 as forgetThis';
			
			sqlReq+=' from "individualValanceShift.csv"'
			
			dbMem.all(sqlReq, function(err, mrows){
				//console.log(err, mrows);
				
				var fields = Object.keys(mrows[0]);
				//console.log(fields);
				json2csv({ data: mrows, fields: fields }, function(err, csv) {
					if (err) console.log(err);
					fs.writeFile('valanceSum.csv', csv, function(err) {
						if (err) throw err;
						console.log('saved valanceSum.csv file');
						resolve(true);
					});
				});
				resolve(true);
			});
			
			//console.log(sqlReq);
			
		});
		
		
	});
}


/*
csv2Json("mainAfter_gen.csv")
.then(function(){return csv2Json("mainBefore_gen.csv")})
.then(function(){return csv2Json("qualtToRef.csv")})
.then(function(){return getAllTIPIs("mainBefore_gen.csv");})
.then(function(){return individualValanceShift();})
.then(function(){return csv2Json("individualValanceShift.csv")})
.then(function(){return valanceShift();})
.then(function(){console.log("all done")});
*/

//only TIPI
// tipi.mainBefore_gen_experiment1_answer_is_number.csv
// tipi.mainBefore_gen_no_catch_human_is_numbers.csv
// tipi.mainBefore_gen_no_catch_is_number.csv

var conditions = [
'mainBefore_gen_experiment1_answer_is_number.csv',
'mainBefore_gen_no_catch_human_is_numbers.csv',
'mainBefore_gen_no_catch_is_number.csv'];

/*
csv2Json(conditions[0])
.then(function(){return getAllTIPIs(conditions[0]);})
.then(function(){console.log("all done")});
*/
csv2Json(conditions[1])
.then(function(){return getAllTIPIs(conditions[1]);})
.then(function(){console.log("all done")});

csv2Json(conditions[2])
.then(function(){return getAllTIPIs(conditions[2]);})
.then(function(){console.log("all done")});

