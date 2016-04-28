var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var heroSchema = new Schema({
  alias: {
    type: String,
    required: true,
    unique: true
  },
  first_name: {
    type: String,
    required: true,
    unique: false
  },
  last_name: {
    type: String,
    required: true,
    unique: false
  },
  city: {
    type: String,
    required: true,
    unique: false
  },
  power_name: {
    type: String,
    required: true,
    unique: false
  }
});

var Hero = mongoose.model('hero', heroSchema);

module.exports = Hero;
