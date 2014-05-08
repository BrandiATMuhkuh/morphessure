var Script = require('deployd/lib/script');
var deployd = require('deployd');

var dpd = deployd({
  port: 2403,
  env: 'development',
  db: {
    host: '127.0.0.1',
    port: 12345,
    name: '-deployd'
  }
});


dpd.listen();

dpd.sockets.on('connection', function (socket) {
  socket.emit('master:info', { hello: 'world' });
  socket.on('master:start', function (data) {
    console.log(data);
    socket.emit('master:info', { answer: 'yourData'+data.username });
  });
});

//console.log(dpd.sockets);