var http = require('http');
var deployd = require('deployd');
var config = require('./config.json');
var internalClient = require('deployd/lib/internal-client');
var dpd = deployd(config.deployd);
var globalSock;
var ic;


dpd.listen();

dpd.sockets.on('connection', function (socket) {
	ic = internalClient.build(process.server);
	globalSock = socket;
 	globalSock.emit('master:info', { hello: 'world' });
 	globalSock.on('master:start', function (data) {
		console.log(data);
		createUser(data.username);
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
	    //console.log("end: " + str);
	    var obj = JSON.parse( str );
	    //console.log(obj);
	    //findUser(obj, userId);
	    ic.beforeexp.post({"username":userId, qualtrics: findUser(obj, userId)}, function(result, err) {
		  if(err) return console.log(err);
		  console.log(result, result.id);
		});
	  });

	}).on('error', function(e) {
	  console.log("Got error: " + e.message);
	});
}


function findUser(qualtricsObject, userId){
	//console.log(qualtricsObject);
	var foundobj=null;
	for(key in qualtricsObject){
		var o = qualtricsObject[key];
		if(o.username==userId){
			delete o.IPAddress;
			delete o.Name;
			delete o.ExternalDataReference;
			delete o.EmailAddress;
			delete o.Status;
			
			if (o.Finished==0){
				globalSock.emit('master:info', { "error": 1, "text":"You did not finish the survey!" });
				return;
			}
			delete o.Finished;
			console.log(o);
			return o;
		}
	}

	
	return null;
}
