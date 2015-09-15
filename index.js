var express = require('express'),
    config = require('./config/server');

var app = express(); // Initialize Express Application instance

// After configuring the Express App, launch an HTTP Server to handle requests
app.listen(config.port, function(){
  console.log('Listening on port ' + config.port);
});
