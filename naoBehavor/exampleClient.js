var net = require('net');

console.log(process.argv[2]);

var say = 'hello';

if(process.argv[2] !== undefined){
	say +=' '+process.argv[2];
}

var client = new net.Socket();
client.connect(50016, 'dontusethisrobot.canterbury.ac.nz', function() {
	console.log('Connected');
	client.write('say='+say+'&lookUp=false');
});
 
client.on('close', function() {
	console.log('Connection closed');
});

