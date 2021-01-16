const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    email : {
        type : String,
        required: true,
        unique :true
    },
    password : {
        type: String,
        required: true
    },
    username : {
        type: String,
        unique :true
    }
}) ;

module.exports = User = mongoose.model('users',UserSchema);