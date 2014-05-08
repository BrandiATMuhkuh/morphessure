var http = require('http');
var deployd = require('deployd');
var config = require('./config.json');

var dpd = deployd(config.deployd);


dpd.listen();

dpd.sockets.on('connection', function (socket) {
  socket.emit('master:info', { hello: 'world' });
  socket.on('master:start', function (data) {
    console.log(data);
    createUser("test");
    //socket.emit('master:info', { answer: 'yourData'+data.username });
  });
});


/**
 * adds a perticipant into the database
 * @param  {[type]} userId Is the id the user gave itself while running the qualtrics question
 * @return {[type]}        [description]
 */
function createUser(userId){
	console.log("createUser");

	var _pars = new Array(
		"API_SELECT=ControlPanel&Version=2.3",
		"Request=getLegacyResponseData",
		"User="+config.qualtrics.User,
		"Token="+config.qualtrics.Token,
		"Format=JSON",
		"SurveyID="+config.qualtrics.SurveyID,
		"Labels=0");

	http.get("http://canterbury.qualtrics.com/WRAPI/ControlPanel/api.php?"+_pars.join("&"), function(res) {
	  console.log("Got response: " + res.statusCode);
	  var str = '';
	  res.on("data", function(chunk) {
	    str += chunk;
	  });

	  res.on("end", function() {
	    console.log("end: " + str);
	    var obj = JSON.parse( str );
	    console.log(obj);
	  });

	}).on('error', function(e) {
	  console.log("Got error: " + e.message);
	});
}
