var express = require('express'),
    userData = require('../data/userData'),
    router = express.Router(); // Create new Router object for express

router.get('/json/', function(request, response){
  response.json(userData);
});

router.get('/', function(request, response){
  response.render('users', {
    users: userData}
  );
});

module.exports = router;
