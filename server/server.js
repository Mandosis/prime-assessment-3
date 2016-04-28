// NPM
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Local
var index = require('./routes/index');

var app = express();

// Configuration
app.use(bodyParser.json());
app.use(express.static('server/public'));

// MongoDB
var mongoURI = 'mongodb://localhost/assessment-3';

mongoose.connect(mongoURI);

// Routes
app.use('/', index);

// Start server
var server = app.listen(process.env.PORT || 3000, function() {
  var port = server.address().port;
  console.log('Listening on port', port);
});
