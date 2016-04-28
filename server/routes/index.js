// NPM
var express = require('express');
var path = require('path');

// Local
var heroes = require('./heroes');

// Create router
var router = express.Router();

// Home page
router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/views/index.html'));
});

// Heroes router
router.use('/heroes', heroes);

module.exports = router;
