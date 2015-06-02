/**
 * Create the DB connection and does db I/O
 */
'use strict';
var Master = require('./Master.js');


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

    return null;
  }

  pNumber(){

    for(let i=0; i < this.args.length; i = i +1){
      if(this.args[i] === "--pnumber"){
        return process.argv[i+1];
      }
    }

    return null;
  }
}
let nodeArgs = new NodeArgs(process.argv);


var config = require("./conditions/condition1.js");
var pName = "111";
if(nodeArgs.getCondition() !== null){
  config = require("./conditions/condition"+nodeArgs.getCondition()+".js");
}

if(nodeArgs.pNumber() !== null){
  pName = nodeArgs.pNumber();
}


new Master(config, pName);

console.log('Start Server');
