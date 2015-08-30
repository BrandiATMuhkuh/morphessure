//csvConditionGenerator.js
//console.log("test");
'use strict';
var sqMem = require("sqlite3").verbose();
var template = require("./condition_generated.js");
var dbMem = new sqMem.Database(':memory:');
var db = new sqMem.Database('../../baseline/baseline.db');
var csv = require("fast-csv");
var fs = require("fs");

var theDict = {};

class CsvConditionGenerator {

    constructor(conditionId, pId, finished) {
        console.log("CsvConditionGenerator");


        dbMem.serialize(function() {

            dbMem.run('create table test2 (item text, stimulusType text, option1 text, option2 text, change text, navigator text, phase text, presentation text, mindex integer);');
            //dbMem.run('.separator ","');

            //dbMem.run('create table test (id integer, datatype_id integer, level integer, meaning text); .separator ","; ');


            //dbMem.run("CREATE TABLE lorem (info TEXT)");

            var stmt = dbMem.prepare("INSERT INTO test2 VALUES (?,?,?,?,?,?,?,?,?)");

            function y() {
                db.all("select * from synonyms where word = 1 order by ref", function(err, row) {

                    //console.log(row);
                    for (var i = 0; i < row.length; i++) {

                        if (theDict[row[i].ref] === undefined) {
                            theDict[row[i].ref] = [];
                        }

                        theDict[row[i].ref].push(row[i].name);

                    }

                    z();
                });

            }
            y();


            function z() {


                csv
                    .fromPath("condition"+conditionId+".csv", {
                        headers: true,
                        objectMode: true
                    })
                    .on("data", function(data) {
                        //console.log(data);    
                        stmt.run(data.item, data.stimulusType, data.option1, data.option2, data.change, data.navigator, data.phase, data.presentation, data.index);

                    })
                    .on("end", function() {
                        console.log("done");
                        stmt.finalize();
                        a();
                        //console.log(template.levels.singlePlayer);

                    });
            }




            function a() {
                console.log("create SinglePlayer");
                var mCount = 0;
                dbMem.each("select * from test2 where presentation = 'pre' and phase = 'naming_test' order by mindex ASC", function(err, row) {


                        var dict = [];
                        if (row.option1 !== 'NA') {
                            dict.push(row.option1);
                        }

                        if (row.option2 !== 'NA') {
                            dict.push(row.option2);
                        }

                        setHintWord("singlePlayer", "player2", mCount, dict.concat(theDict[row.item]));
                        setHintImage("singlePlayer", "player2", mCount, row.item);
                        mCount++;


                    },
                    function(d) {

                        //limit secSinglePlayer dictionary to mCount size
                        getFields("singlePlayer", "player1").hintList = getFields("singlePlayer", "player1").hintList.slice(0, mCount);
                        getFields("singlePlayer", "player2").hintList = getFields("singlePlayer", "player2").hintList.slice(0, mCount);
                        //console.log(getFields("singlePlayer", "player2").hintList);
                        getFields("singlePlayer", "player1").hintWord = getFields("singlePlayer", "player1").hintWord.slice(0, mCount);
                        getFields("singlePlayer", "player2").hintWord = getFields("singlePlayer", "player2").hintWord.slice(0, mCount);


                        console.log("i'm done in A");
                        b();
                    });
            }

            function b() {
                console.log("create secSinglePlayer");
                var mCount = 0;
                dbMem.each("select * from test2 where presentation = 'post' and phase = 'naming_test' order by mindex ASC", function(err, row) {
                        //console.log(row);


                        var dict = [];
                        if (row.option1 !== 'NA') {
                            dict.push(row.option1);
                        }

                        if (row.option2 !== 'NA') {
                            dict.push(row.option2);
                        }

                        setHintWord("secSinglePlayer", "player2", mCount, dict.concat(theDict[row.item]));
                        setHintImage("secSinglePlayer", "player2", mCount, row.item);
                        mCount++;


                    },
                    function(d) {
                        getFields("secSinglePlayer", "player1").hintList = getFields("singlePlayer", "player1").hintList.slice(0, mCount);
                        getFields("secSinglePlayer", "player2").hintList = getFields("singlePlayer", "player2").hintList.slice(0, mCount);

                        getFields("secSinglePlayer", "player1").hintWord = getFields("singlePlayer", "player1").hintWord.slice(0, mCount);
                        getFields("secSinglePlayer", "player2").hintWord = getFields("singlePlayer", "player2").hintWord.slice(0, mCount);



                        console.log("I'm done in B");
                        c();
                    });


            }

            function c() {
                console.log("create main game");

                var mCount = 0;
                var rCount = 0;
                dbMem.each("select * from test2 where presentation != 'pre' AND presentation != 'post' order by mindex ASC", function(err, row) {
                        //dbMem.each("select * from test2 where presentation = 'post' and phase = 'naming_test' order by mindex ASC limit 40", function(err, row) {

                        //console.log(row.navigator);

                        var dict = [];
                        dict.push(row.option1);
                        dict.push(row.option2);

                        if (row.navigator === 'robot') {
                            setHintWord("multiPlayer", "player1", rCount, dict.concat(theDict[row.item]));
                            setHintImage("multiPlayer", "player1", rCount, row.item);
                            rCount++;
                        } else if (row.navigator === 'subject') {
                            setHintWord("multiPlayer", "player2", mCount, theDict[row.item]);
                            setHintImage("multiPlayer", "player2", mCount, row.item);
                            mCount++;
                        }


                        //setHintWord("secSinglePlayer", "player1", mCount, [row.option1, row.option2]);
                        //setHintImage("secSinglePlayer", "player1", mCount, row.item);

                    },
                    function(d) {
                        getFields("multiPlayer", "player1").hintList = getFields("multiPlayer", "player1").hintList.slice(0, rCount);
                        getFields("multiPlayer", "player2").hintList = getFields("multiPlayer", "player2").hintList.slice(0, rCount);

                        getFields("multiPlayer", "player1").hintWord = getFields("multiPlayer", "player1").hintWord.slice(0, mCount);
                        getFields("multiPlayer", "player2").hintWord = getFields("multiPlayer", "player2").hintWord.slice(0, mCount);

                        console.log("I'm done here");
                        finish();
                    });


            }

            function finish() {
                console.log("finish");
                saveCondition("condition_generated.js", "module.exports = " + JSON.stringify(template, null, '\t') + ";");
                saveCondition("condition"+conditionId+".js", "module.exports = " + JSON.stringify(template, null, '\t') + ";");
            	finished();
            }




        });
    }

}





function setHintWord(level, player, index, hintWords) {
    index = parseInt(index);
    var f = getFields(level, player);
    //console.log(level,player,index, hintWords);
    f.hintWord[index] = hintWords;
    //console.log(index, f.hintWord[index]);
}

function setHintImage(level, player, index, image) {
    index = parseInt(index);
    var f = getFields(level, player);
    //console.log(f.hintList[index]);
    //console.log(level,player,index, image);
    //console.log(getTrap(f.trapList, f.hintList[index]));
    var mtrap = getTrap(f.trapList, f.hintList[index]);
    if (mtrap) {
        mtrap.name = image;
        //console.log(mtrap);	
    }

}

function getFields(level, player) {
    //console.log(level, player);
    var a = template.levels[level].fields;
    //console.log(a);
    for (var m = 0; m < a.length; m++) {
        if (a[m].playerName === player) {
            return a[m];
        }
        //console.log(a.length, a[m].playerName);
    }

    return null;
}

function getTrap(trapList, hintPost) {
    //console.log("getTrap", trapList, hintPost);
    if (hintPost === undefined) {
        return null;
    }

    for (var i = 0; i < trapList.length; i++) {
        //console.log(hintPost, trapList[i].position[0], trapList[i].position[1]);
        if (hintPost[0] === trapList[i].position[0] && hintPost[1] === trapList[i].position[1]) {
            return trapList[i];
        }
    }

    return null;
}

function saveCondition(filename, data) {
    fs.writeFile(filename, data, function(err) {
        if (err) {
            return console.log(err);
        }
    });
}

module.exports = CsvConditionGenerator; 
//new CsvConditionGenerator();
