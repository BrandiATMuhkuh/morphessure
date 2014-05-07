var deployd = require('deployd')
  , options = {port: 2403};

var dpd = deployd({
  port: process.env.PORT || 2503,
  env: 'development',
  db: {
    host: '127.0.0.1',
    port: 9515,
    name: '-deployd'
  }
});

dpd.listen();

//console.log("import data in the local db");