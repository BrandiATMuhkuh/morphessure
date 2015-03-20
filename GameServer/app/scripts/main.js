console.log('\'Allo \'Allod!');


var socket = io('//'+window.location.hostname+':3000');
socket.on('news', function (data) {
  console.log(data);
  socket.emit('my other event', { my: 'data' });
});
