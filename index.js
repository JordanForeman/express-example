var express = require('express'),
    config = require('./config/server');

// Application Configuration
var app = express();
app.set('view engine', 'jade');

app.get('/', function(request, response){
  response.send('Test Successful!');
});

app.use('/users', require('./routes/users'));

// After configuring the Express App, launch an HTTP Server to handle requests
app.listen(config.port, function(){
  console.log('Listening on port ' + config.port);
});
