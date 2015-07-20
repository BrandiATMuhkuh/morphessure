/**
curl -i -H "Content-Type: application/json" -X POST -d '{"say":"Hello. How are you?"}' http://localhost:5000/say
*/
var request = require('request');

var requestData = {
  say: "Hello. How are you?"
};

request('http://localhost:5000/say',
        {method: "POST", json: true, body: requestData },
        function(err, res, body) {
  // `body` is a js object if request was successful
});
