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
    return "111";
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
    return "dontusethisrobot";
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
}
let nodeArgs = new NodeArgs(process.argv);


var config = config = require("./conditions/condition"+nodeArgs.getCondition()+".js");
var pId = nodeArgs.getpId();

new Master(config, pId, nodeArgs.getRobotAddress(), nodeArgs.getRobotPort());

console.log('Start Server');
