var net = require('net');
 
var client = new net.Socket();
client.connect(50016, 'localhost', function() {
	console.log('Connected');
	client.write('say=hello&lookUp=false');
});
 
client.on('close', function() {
	console.log('Connection closed');
});

