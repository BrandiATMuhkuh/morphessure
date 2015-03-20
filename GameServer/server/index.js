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
