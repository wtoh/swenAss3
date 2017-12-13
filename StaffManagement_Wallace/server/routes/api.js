const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://admin:root@ds135196.mlab.com:35196/hotelmgmt');

var Staff = mongoose.model('staffs', 
new Schema({ name: String, staffid: String, password: String, accessLevel: Number, jobPosition: String, salary: Number}), 
'staffs'); 

var Message = mongoose.model('messages', new Schema({ content: String, recipient: String }), 
'messages'); 

router.get('/staffs', (req, res) => {
  Staff.find({}, function(err, staffs) {
    if (err) throw err;

    res.json(staffs);
  });
});

router.get('/:id', (req, res) => {
  Staff.find({ staffid: req.params.id.toLowerCase() }, function(err, staff) {
    if (err) throw err;
  
    res.json(staff);
  });
});

router.get('/update/:oldstaffid&:name&:staffid&:password&:accessLevel&:jobPosition&:salary', (req, res) => {
  Staff.findOneAndUpdate({ staffid: req.params.oldstaffid.toLowerCase() }, { name: req.params.name }, function(err, staff) {
    if (err) throw err;

  });

  Staff.findOneAndUpdate({ staffid: req.params.oldstaffid.toLowerCase() }, { password: req.params.password }, function(err, staff) {
    if (err) throw err;

    
  });

  Staff.findOneAndUpdate({ staffid: req.params.oldstaffid.toLowerCase() }, { accessLevel: req.params.accessLevel }, function(err, staff) {
    if (err) throw err;

  });

  Staff.findOneAndUpdate({ staffid: req.params.oldstaffid.toLowerCase() }, { jobPosition: req.params.jobPosition }, function(err, staff) {
    if (err) throw err;

    
  });

  Staff.findOneAndUpdate({ staffid: req.params.oldstaffid.toLowerCase() }, { salary: req.params.salary }, function(err, staff) {
    if (err) throw err;

    
  });

  Staff.findOneAndUpdate({ staffid: req.params.oldstaffid.toLowerCase() }, { staffid: req.params.staffid }, function(err, staff) {
    if (err) throw err;
    
    res.json(staff);
  });
});
  
  
  

  


  

  

router.get('/staff/:name&:staffid&:password&:accessLevel&:jobPosition&:salary', (req, res) => {
  var newStaff = Staff({
    name: req.params.name,
    staffid: req.params.staffid.toLowerCase(),
    password: req.params.password,
    accessLevel: req.params.accessLevel,
    jobPosition: req.params.jobPosition,
    salary: req.params.salary
  });
  
  newStaff.save(function(err) {
    if (err) throw err;
  
    console.log('Staff created!');
  });
  res.json("Done");
});

router.get('/delete/:staffid', (req, res) => {
  Staff.findOneAndRemove({ staffid: req.params.staffid }, function(err, staff) {
    if (err) throw err;

    console.log("Staff deleted!");
  });
  res.json("Done");
});


module.exports = router;