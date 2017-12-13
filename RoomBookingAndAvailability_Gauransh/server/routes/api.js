const express = require('express');
const router = express.Router();
const mongoose = require('mongoose'); 
const guest = require('../models/guest');
const room = require('../models/room');

const db = "mongodb://user:user@ds135196.mlab.com:35196/hotelmgmt";


mongoose.Promise = global.Promise;
mongoose.connect(db, function(err) {
    if(err) {
        console.log('Error connecting');
    }
});

router.get('/rooms', function(req, res){
  room.find({})
    .exec(function(err, rooms){
       if (err){
         console.log('Error getting the rooms details')
       } else {
         console.log(rooms);
         res.json(rooms);
       }
    });
});

router.post('/guests', function(req, res){
  console.log("Adding a new guest");
  var newGuest = new guest();
  newGuest.name = req.body.name;
  newGuest.noofpeople = req.body.noofpeople;
  newGuest.phoneno = req.body.phoneno;
  newGuest.email = req.body.email;
  newGuest.Address = req.body.Address;
  newGuest.cid = req.body.cid;
  newGuest.cod = req.body.cod;
  newGuest.addrem = req.body.addrem;
  newGuest.lco = req.body.lco;
  newGuest.save(function(err, guest){
    if(err){
      console.log('Error inserting the guest details');
    } else {
      res.json(guest);
    }
  });
});

router.post('/rooms/:id', function(req, res) {
  console.log('Updating a Room');

  room.findById(req.params.id)
      .exec(function(err, article) {
          if (err) {
              console.log('Could not find the room');
          } else {
              article.available = req.body.available;
              article.save();
              res.json(article);
          }
      });
});

module.exports = router;