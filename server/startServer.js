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
 	
 	globalSock.on('master:startTest', function (data) {
		console.log('master:startTest');
		console.log("tell client 0 to reload");
		globalSock.emit('client:start', { "client": 0, "levelname":"practice" });
		
		setTimeout(function(){
			console.log("tell client 1 to reload");
			globalSock.emit('client:start', { "client": 1, "levelname":"practice" });
		}, 3000);
  	});

 	globalSock.on('master:start', function (data) {
		console.log(data);
		createUser(data.username);
  	});

  	
});


/**
 * adds a perticipant into the database
 * @param  {[type]} userId Is the id the user gave itself while running the qualtrics question
 * @return {[type]}        [description]
 */
function createUser(userId){
	console.log("createUser");
	track(userId, "info", {"function":"startCreateUser"});

	var _pars = new Array(
		"API_SELECT=ControlPanel&Version=2.3",
		"Request=getLegacyResponseData",
		"User="+config.qualtrics.User,
		"Token="+config.qualtrics.Token,
		"Format=JSON",
		"SurveyID="+config.qualtrics.SurveyID,
		"Labels=0");

	track(userId, "info", {"function":"qualtricsRequest"});
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
	    var anData = anonUser(obj, userId);
	    if(anData==null){
	    	return null;
	    }

	    track(userId, "info", {"function":"storeBeforeExp"});
	    ic.beforeexp.post({"username":userId, qualtrics: anData}, function(result, err) {
		  if(err) {
		  	track(userId, "error", {"function":"beforeexp"});
			globalSock.emit('master:info', { "error": 1, "function":"beforeexp", "text":"Something bad happened" });
		  	return null;
		  }
		  console.log(result, result.id);
		  getWordNames(userId, anData);


		});
	  });

	}).on('error', function(e) {
	  console.log("Got error: " + e.message);
	});
}

/**
 * Finds data for user with id "userId" and anonymices this data
 * @param  {[type]} qualtricsObject [description]
 * @param  {[type]} userId          [description]
 * @return {[type]}                 [description]
 */
function anonUser(qualtricsObject, userId){
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
				track(userId, "error", {"function":"anonUser"});
				globalSock.emit('master:info', { "error": 1, "function":"anonUser", "text":"You did not finish the survey!" });
				return;
			}
			delete o.Finished;
			console.log(o);
			return o;
		}
	}

	
	return null;
}


/**
 * [getWordNames description]
 * @param  {[type]} userId       [description]
 * @param  {[type]} qualtricData [description]
 * @return {[type]}              [description]
 */
function getWordNames(userId, qualtricData){	
	track(userId, "info", {"function":"getWordNames"});
	ic.wordnames.get(function (result, err) {
		if(err) {
			track(userId, "error", {"function":"getWordNames"});
			globalSock.emit('master:info', { "error": 1, "function":"getWordNames", "text":"Something bad happened" });
			return null;
		}
		console.log(result);

		var words = {};
		for(a in result){
			words[result[a].qualtname] = {
				"euphemism" : result[a].euphemism,
				"normalism" : result[a].normalism,
				"dysphemism" : result[a].dysphemism
			};
		}	

		console.log(words);
		getSceneAndReplaceWords(userId, "practice", qualtricData, words);
		
	});
}


function getSceneAndReplaceWords(userId, sceneName, qualtricData, words){
	track(userId, "info", {"function":"getSceneAndReplaceWords"});
	ic.scenes.get({"sceneName": sceneName}, function (result, err) {
		if(err) {
			track(userId, "error", {"function":"getSceneAndReplaceWords"});
			globalSock.emit('master:info', { "error": 1, "function":"getSceneAndReplaceWords", "text":"Something bad happened" });
			return null;
		}

	  //var r = result[0];


	  var player0map = result[0].player0.map;
	  //console.log(player0map);
	  
	  for(a in player0map){
	  	if(player0map[a].qname){
	  		player0map[a].say = qualtricsToWord(player0map[a].qname, qualtricData, words);
	  	}
	  }

	  
	  player0map = result[0].player1.map;
	  for(a in player0map){
	  	if(player0map[a].qname){
	  		player0map[a].say = qualtricsToWord(player0map[a].qname, qualtricData, words);
	  	}
	  }

	//console.log("getSceneAndReplaceWords END", result);
	
	track(userId, "info", {"function":"postexperiment"});
	ic.experiment.post({"username": userId, "player0": result[0].player0, "player1": result[0].player1}, function(result2, err) {
		if(err) {
			track(userId, "error", {"function":"postexperiment"});
			globalSock.emit('master:info', { "error": 1, "function":"postexperiment", "text":"Something bad happened" });
			return null;
		}
		//Start both clients to do the right nights
		//console.log(result2, result2.id);
		console.log("tell client 0 to reload");
		globalSock.emit('client:start', { "client": 0, "levelname":"practice" });
		
		setTimeout(function(){
			console.log("tell client 1 to reload");
			globalSock.emit('client:start', { "client": 1, "levelname":"practice" });
		}, 3000);
	});

	});
}

function qualtricsToWord(qtitle, qualtricData, words){
	
	var qname = parseInt(qualtricData[""+qname+"_name"]);
	var qtext = "1";//qualtricData[""+qname+"_like"];
	var qFt = qname+""+qtext;
	var ret = "Nothing to say!";

	console.log("qname", words, qtitle);
	ret = words[""+qtitle].euphemism;
	ret = words[""+qtitle].normalism;
	ret = words[""+qtitle].dysphemism;

	//// TODO
	/// SELECT the correct word

	if(qFt == "11"){

	}else if(qFt == "12"){

	}else if(qFt == "13"){

	}else if(qFt == "21"){

	}else if(qFt == "22"){

	}else if(qFt == "23"){

	}else if(qFt == "31"){

	}else if(qFt == "32"){

	}else if(qFt == "33"){

	}

	return ret;
}

function track(userId, msgtype, message){
	console.log({"username":userId,"timestamp":new Date().getTime(),"msgtype":msgtype, "message":message, "client":false});
	ic.track.post({"username":userId,"timestamp":new Date().getTime(),"msgtype":msgtype, "message":message, "client":false}, function(result, err) {});
}
