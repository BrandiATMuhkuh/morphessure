'use strict';

var io = require('socket.io')();
io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});
io.listen(3000);


for(var i=0;i<10;i++) {
  console.log("Server is runningsdf");
}

/**
 * Create the DB connection and does db I/O
 */
class Database {

  constructor (dbAddress, dbPort){
    console.log(dbAddress + " " + dbPort);
  }

  getScene(sceneNr){

    return sceneNr
  }

}

var myDb = new Database("12343", 163);
console.log(myDb.getScene(15));

//module.exports  = io;
