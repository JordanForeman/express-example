var express = require('express'),
    config = require('./config/server');

var app = express(); // Initialize Express Application instance

app.get('/', function(request, response){
  response.send('Test Successful!');
});

// After configuring the Express App, launch an HTTP Server to handle requests
app.listen(config.port, function(){
  console.log('Listening on port ' + config.port);
});
