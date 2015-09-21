//csvConditionGenerator.js
//console.log("test");
'use strict';
var sqMem = require("sqlite3").verbose();
var template = require("./conditions/condition_generated.js");
var dbMem = new sqMem.Database(':memory:');
var db = new sqMem.Database(__dirname + '/../../baseline/baseline.db');
var csv = require("fast-csv");
var fs = require("fs");

var theDict = {};
var imageList = [];


//give array some extra power
/*
Array.prototype.containsArray = function(val) {
    var hash = {};
    for(var i=0; i<this.length; i++) {
        hash[this[i]] = i;
    }
    return hash.hasOwnProperty(val);
};*/

class CsvConditionGenerator {

    constructor(conditionId, pId, finished) {
        console.log("CsvConditionGenerator", __dirname);
        template.identification.conditionId = conditionId;

        dbMem.serialize(function() {

            dbMem.run('create table test2 (item text, stimulusType text, option1 text, option2 text, change text, navigator text, phase text, presentation text, mindex integer);');
            //dbMem.run('.separator ","');

            //dbMem.run('create table test (id integer, datatype_id integer, level integer, meaning text); .separator ","; ');


            //dbMem.run("CREATE TABLE lorem (info TEXT)");

            var stmt = dbMem.prepare("INSERT INTO test2 VALUES (?,?,?,?,?,?,?,?,?)");

            function y() {
                db.all("select * from synonyms where word = 1 order by ref", function(err, row) {

                    //console.log(err, row);

                    for (var i = 0; i < row.length; i++) {

                        if (theDict[row[i].ref] === undefined) {
                            theDict[row[i].ref] = [];
                            imageList.push(row[i].ref);
                        }

                        theDict[row[i].ref].push(row[i].name);

                    }

                    z();
                });

            }
            y();


            function z() {


                csv
                    .fromPath(__dirname + "/conditions/condition" + conditionId + ".csv", {
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
                        cleanData("singlePlayer", "player1");
                        cleanData("singlePlayer", "player2");

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
                        cleanData("secSinglePlayer", "player1");
                        cleanData("secSinglePlayer", "player2");

                        getFields("secSinglePlayer", "player1").hintList = getFields("secSinglePlayer", "player1").hintList.slice(0, mCount);
                        getFields("secSinglePlayer", "player2").hintList = getFields("secSinglePlayer", "player2").hintList.slice(0, mCount);

                        getFields("secSinglePlayer", "player1").hintWord = getFields("secSinglePlayer", "player1").hintWord.slice(0, mCount);
                        getFields("secSinglePlayer", "player2").hintWord = getFields("secSinglePlayer", "player2").hintWord.slice(0, mCount);



                        console.log("I'm done in B");
                        c();
                    });


            }

            function c() {
                console.log("create main game");

                var mCount = 0;
                var rCount = 0;
                //getFields("multiPlayer", "player1").hintList = [];
                //getFields("multiPlayer", "player2").hintList = [];
                getFields("multiPlayer", "player1").hintWord = [];
                getFields("multiPlayer", "player2").hintWord = [];
                dbMem.each("select * from test2 where phase = 'collaboration' AND (presentation = 'block1' OR presentation = 'block2') order by mindex ASC", function(err, row) {
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
                    function() {

                        cleanData("multiPlayer", "player1");
                        cleanData("multiPlayer", "player2");

                        getFields("multiPlayer", "player1").hintList = getFields("multiPlayer", "player1").hintList.slice(0, rCount);
                        getFields("multiPlayer", "player2").hintList = getFields("multiPlayer", "player2").hintList.slice(0, rCount);

                        getFields("multiPlayer", "player1").hintWord = getFields("multiPlayer", "player1").hintWord.slice(0, mCount);
                        getFields("multiPlayer", "player2").hintWord = getFields("multiPlayer", "player2").hintWord.slice(0, mCount);

                        console.log("I'm done here");
                        d();
                        //finish();
                    });

                    //select * from test2 where phase = 'naming_test' AND presentation = 'tutorial' order by mindex ASC
                    //select * from test2 where phase = 'collaboration' AND presentation = 'tutorial' order by mindex ASC


            }

            function d() {
                console.log("create tutorial");
                var mCount = 0;
                dbMem.each("select * from test2 where phase = 'naming_test' AND presentation = 'tutorial' order by mindex ASC", function(err, row) {
                        //console.log(row, theDict[row.item]);


                        var dict = [];
                        if (row.option1 !== 'NA') {
                            dict.push(row.option1);
                        }

                        if (row.option2 !== 'NA') {
                            dict.push(row.option2);
                        }

                        setHintWord("tutorial", "player2", mCount, dict.concat(theDict[row.item]));
                        setHintImage("tutorial", "player2", mCount, row.item);
                        mCount++;


                    },
                    function(d) {
                        cleanData("tutorial", "player1");
                        cleanData("tutorial", "player2");

                        getFields("tutorial", "player1").hintList = getFields("tutorial", "player1").hintList.slice(0, mCount);
                        getFields("tutorial", "player2").hintList = getFields("tutorial", "player2").hintList.slice(0, mCount);

                        getFields("tutorial", "player1").hintWord = getFields("tutorial", "player1").hintWord.slice(0, mCount);
                        getFields("tutorial", "player2").hintWord = getFields("tutorial", "player2").hintWord.slice(0, mCount);



                        console.log("I'm done in B");
                        f();
                    });


            }

            function f() {
                console.log("create multiPlayerTutorial");

                var mCount = 0;
                var rCount = 0;
                dbMem.each("select * from test2 where phase = 'collaboration' AND presentation = 'tutorial' order by mindex ASC", function(err, row) {
                        //dbMem.each("select * from test2 where presentation = 'post' and phase = 'naming_test' order by mindex ASC limit 40", function(err, row) {

                        //console.log(row.navigator);

                        var dict = [];
                        dict.push(row.option1);
                        dict.push(row.option2);

                        if (row.navigator === 'robot') {
                            setHintWord("multiPlayerTutorial", "player1", rCount, dict.concat(theDict[row.item]));
                            setHintImage("multiPlayerTutorial", "player1", rCount, row.item);
                            rCount++;
                        } else if (row.navigator === 'subject') {
                            setHintWord("multiPlayerTutorial", "player2", mCount, theDict[row.item]);
                            setHintImage("multiPlayerTutorial", "player2", mCount, row.item);
                            mCount++;
                        }


                        //setHintWord("secSinglePlayer", "player1", mCount, [row.option1, row.option2]);
                        //setHintImage("secSinglePlayer", "player1", mCount, row.item);

                    },
                    function(d) {

                        cleanData("multiPlayerTutorial", "player1");
                        cleanData("multiPlayerTutorial", "player2");

                        getFields("multiPlayerTutorial", "player1").hintList = getFields("multiPlayerTutorial", "player1").hintList.slice(0, rCount);
                        getFields("multiPlayerTutorial", "player2").hintList = getFields("multiPlayerTutorial", "player2").hintList.slice(0, rCount);

                        getFields("multiPlayerTutorial", "player1").hintWord = getFields("multiPlayerTutorial", "player1").hintWord.slice(0, mCount);
                        getFields("multiPlayerTutorial", "player2").hintWord = getFields("multiPlayerTutorial", "player2").hintWord.slice(0, mCount);

                        console.log("I'm done here");
                        finish();
                    });

                    //select * from test2 where phase = 'naming_test' AND presentation = 'tutorial' order by mindex ASC
                    //select * from test2 where phase = 'collaboration' AND presentation = 'tutorial' order by mindex ASC


            }

            function cleanData(level, player) {
                //console.log("---------- cleanData -------------");
                var field = getFields(level, player);
                var hintList = field.hintList;
                var hintWord = field.hintWord;
                var trapList = field.trapList;

                //iterate thought hintList
                for (var i = 0; i < hintList.length; i++) {
                    //console.log(hintList[i], hintWord[i]);
                    var hint = hintList[i];
                    var theTrap = getTrap(trapList, hint);
                    //console.log(hint, theTrap);

                    // check the neibors
                    var neibors = [];
                    var neiborsNames = [];
                    neiborsNames.push(theTrap.name);
                    neibors.push([hint[0]-2, hint[1]-2]);                    
                    neibors.push([hint[0]-2, hint[1]-1]);
                    neibors.push([hint[0]-2, hint[1]+0]);
                    neibors.push([hint[0]-2, hint[1]+1]);
                    neibors.push([hint[0]-2, hint[1]+2]);
                    neibors.push([hint[0]-1, hint[1]-2]);
                    neibors.push([hint[0]-1, hint[1]-1]);
                    neibors.push([hint[0]-1, hint[1]+0]);
                    neibors.push([hint[0]-1, hint[1]+1]);
                    neibors.push([hint[0]-1, hint[1]+2]);
                    neibors.push([hint[0]-0, hint[1]-2]);
                    neibors.push([hint[0]-0, hint[1]-1]);
                    neibors.push([hint[0]-0, hint[1]-0]);
                    neibors.push([hint[0]-0, hint[1]+1]);
                    neibors.push([hint[0]-0, hint[1]+2]);
                    neibors.push([hint[0]+1, hint[1]-2]);
                    neibors.push([hint[0]+1, hint[1]-1]);
                    neibors.push([hint[0]+1, hint[1]+0]);
                    neibors.push([hint[0]+1, hint[1]+1]);
                    neibors.push([hint[0]+1, hint[1]+2]);
                    neibors.push([hint[0]+2, hint[1]-2]);
                    neibors.push([hint[0]+2, hint[1]-1]);
                    neibors.push([hint[0]+2, hint[1]+0]);
                    neibors.push([hint[0]+2, hint[1]+1]);
                    neibors.push([hint[0]+2, hint[1]+2]);
                    //console.log(neibors);
                    for(var m = 0; m < neibors.length; m++){
                        //console.log(neibors[i]);
                        //console.log(getTrap(trapList, neibors[0]));
                        var t = getTrap(trapList, neibors[m]);

                        //check if element is in test list neibors[m]
                        //console.log(hintList.containsArray(neibors[m]));
                        //var isTestElement = hintList.containsArray(neibors[m]);
                        var isTestElement = containsArray(neibors[m], hintList, t);
                        if(t && !isTestElement){
                            //console.log(t.name)
                            neiborsNames.push(t.name);
                            if(t.name === theTrap.name){
                                //console.log(t.name, theTrap.name, "found it nopppp");

                                var newElem = imageList[Math.floor(Math.random()*imageList.length)];
                                
                                while(neiborsNames.indexOf(newElem) != -1){
                                    newElem = imageList[Math.floor(Math.random()*imageList.length)];
                                }

                                //console.log(newElem, theTrap.name, "found NEW THING");
                                
                                t.name = newElem;


                                //imageList neiborsNames
                            }
                        }
                    }



                }
            }

            function finish() {
                console.log("finish");
                //finished();
                saveCondition(__dirname + "/conditions/condition" + conditionId + ".js", JSON.stringify(template, null, '\t'),finished);
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

function saveCondition(filename, data, fdone) {
    fs.writeFile(filename, data, function(err) {
        if (err) {
            return console.log(err);
        }
        fdone();
    });
}

function containsArray(needles, haystack, t){

    //console.log("containsArray", needles);

    for(var i = 0; i < haystack.length; i++){

        if(haystack[i][0] === needles[0] && haystack[i][1] === needles[1]){
            //console.log(haystack[i], needles, t.name);
            return true;
        }
    }
        

    return false;
}

module.exports = CsvConditionGenerator;
//new CsvConditionGenerator();