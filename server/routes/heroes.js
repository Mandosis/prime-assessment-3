var express = require('express');
var mongoose = require('mongoose');

var Hero = require('../../models/hero');

var router = express.Router();

// Get all heros
router.get('/', function(req, res) {
  Hero.find({}, function(err, heroes) {
    if (err) {
      console.log('Error fetching heroes from database', err);
      res.sendStatus(500);
    } else {
      res.send(heroes);
    }
  });
});

// Add a new hero
router.post('/', function(req, res) {
  var newHero = new Hero({
    alias: req.body.alias,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    city: req.body.city,
    power_name: req.body.power_name
  });

  newHero.save(function(err) {
    if (err) {
      console.log('Error saving hero to databse', err);
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

router.delete('/:id', function(req, res) {
  Hero.find({_id: req.params.id}).remove(function(err) {
    if (err) {
      console.log('Error removing hero from database', err);
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;
