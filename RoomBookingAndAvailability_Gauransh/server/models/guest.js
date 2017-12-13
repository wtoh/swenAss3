const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const guestSchema = new Schema({
    name: String,
    noofpeople: String,
    phoneno: String,
    email: String,
    address: String,
    cid:String,
    cod:String,
    addrem: String,
    lco:String
})

module.exports = mongoose.model('guest', guestSchema);