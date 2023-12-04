const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//make a schema for a user to signup 
const UserSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String,
});

//export the model to use in index.js
const User = mongoose.model('User', UserSchema);
module.exports = User;
