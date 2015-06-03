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

    return 1;
  }

  pId(){

    for(let i=0; i < this.args.length; i = i +1){
      if(this.args[i] === "--pId"){
        return process.argv[i+1];
      }
    }

    return "111";
  }
}
let nodeArgs = new NodeArgs(process.argv);


var config = config = require("./conditions/condition"+nodeArgs.getCondition()+".js");
var pId = nodeArgs.pId();

new Master(config, pId);

console.log('Start Server');
