const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema({
    no:String,
    price:String,
    beds:String,
    available:String
})

module.exports = mongoose.model('room', roomSchema);