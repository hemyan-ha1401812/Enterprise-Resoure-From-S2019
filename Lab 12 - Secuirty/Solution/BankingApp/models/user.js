const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email : {
        type : String,
        unique:[true,"this account is already exist"],
        required : [true, "user email is required"]
    },
    password : {
        type : String,
        required : [true, "user password is required"]
    },
    role : {
        type : String,
        enum:['clerk','manager'],
        required : [true, "user role is required"]
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;