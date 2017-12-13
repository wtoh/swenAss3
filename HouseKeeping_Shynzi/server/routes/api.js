const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://admin:root@ds135196.mlab.com:35196/hotelmgmt');

var Staff = mongoose.model('staffs', 
new Schema({ name: String, staffid: String, password: String, accessLevel: Number, jobPosition: String, salary: Number }), 
'staffs'); 

var Room = mongoose.model('rooms', new Schema({ no: String, needCleaning: Boolean, remarks: String }), 
'rooms'); 

router.get('/update/:no&:remark', (req, res) => {
    Room.findOneAndUpdate({no: req.params.no}, {remarks: req.params.remark}, function(err, room) {
        if (err) throw err;

        res.json(room);
    });
});

router.get('/room/:no&:value', (req, res) => {
    var value = new Boolean;

    if (req.params.value == "true")
        value = true;
    else
        value = false;

    Room.findOneAndUpdate({no: req.params.no}, {needCleaning: value}, function(err, room) {
        if (err) throw err;

        res.json(room);
    })
});

router.get('/rooms', (req, res) => {
    Room.find({}, function(err, rooms) {
        if (err) throw err;

        res.json(rooms);
    });
});

router.get('/:id', (req, res) => {
  Staff.find({ staffid: req.params.id.toLowerCase() }, function(err, staff) {
    if (err) throw err;
  
    res.json(staff);
  });
});

module.exports = router;