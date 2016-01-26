/**
 * Create the DB connection and does db I/O
 */
'use strict';
var Master = require('./Master.js');
var fs = require("fs");

class NodeArgs{
  constructor (args){
    this.args = args;
  }

  /**
   * returns the current condition or null
   * @returns {null} name of condition or null if not specified
   */
  getCondition(){
    for(let i=0; i < this.args.length; i = i +1){
      if(this.args[i] === "--condition"){
        return process.argv[i+1];
      }
    }

    return "1Z";
  }

  /**\
   * return the participants Id. This is mainly used to log what participant said
   * @returns {*}
   */
  getpId(){

    for(let i=0; i < this.args.length; i = i +1){
      if(this.args[i] === "--pId"){
        return process.argv[i+1];
      }
    }

    return "1111111";
    //return ''+parseInt(Math.random()*1000);
  }

  /**
   *
   * @returns {*}
   */
  getRobotAddress(){
    for(let i=0; i < this.args.length; i = i +1){
      if(this.args[i] === "--robotAddress"){
        return process.argv[i+1];
      }
    }
    //return "dontusethisrobot";
    return undefined;
  }

  /**
   *
   * @returns {*}
   */
  getRobotPort(){
    for(let i=0; i < this.args.length; i = i +1){
      if(this.args[i] === "--robotPort"){
        return process.argv[i+1];
      }
    }
    return undefined;
  }


  getDebug(){
    for(let i=0; i < this.args.length; i = i +1){
      if(this.args[i] === "--debug"){
        return JSON.parse(process.argv[i+1]);
      }
    }

    return false;
  }
}
let nodeArgs = new NodeArgs(process.argv);




var pId = nodeArgs.getpId();
var conditionId = nodeArgs.getCondition();
var robotAddress = nodeArgs.getRobotAddress();
var robotPort = nodeArgs.getRobotPort();
var debugFlag = nodeArgs.getDebug();

//console.log("DEBUG? ",debugFlag);

//new Master(JSON.parse(fs.readFileSync(__dirname+"/conditions/condition1.js")), pId, robotAddress, robotPort);

var CsvConditionGenerator = require('./csvConditionGenerator.js');



//var config = require(__dirname+"/conditions/condition1.js");
//var config = JSON.parse(fs.readFileSync(__dirname+"/conditions/condition1.js", 'utf8'));
//console.log(config);

//var config = JSON.parse(fs.readFileSync(__dirname+"/conditions/condition2.js"));
//new Master(config, pId, robotAddress, robotPort);
//console.log(config);


var con = new CsvConditionGenerator(conditionId, pId, function(e){
  //console.log("juhu CsvConditionGeneration is done", conditionId, __dirname+"/conditions/condition1.js");
  var config = JSON.parse(fs.readFileSync(__dirname+"/conditions/condition"+conditionId+".js"));


  new Master(config, pId, robotAddress, robotPort, debugFlag);
  console.log('Start Server');
});
