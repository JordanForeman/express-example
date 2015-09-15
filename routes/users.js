var express = require('express'),
    userData = require('../data/userData'),
    router = express.Router(); // Create new Router object for express

router.get('/', function(request, response){
  response.json(userData);
});

module.exports = router;
