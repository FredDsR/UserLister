const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        required: true,
    },
    phone: String,
    address: String,
});

module.exports = mongoose.model('User', UserSchema);