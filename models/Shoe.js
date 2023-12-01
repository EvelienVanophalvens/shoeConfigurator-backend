const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//make a schema for a shoe configurator, with following fields: Shoe name, Shoe size, Color Laces, Color Outsole, Color Midsole, Color outer material, Color mid Material, Color inner Material, Inner Material, first name, last name, email, phone number, address, city, state, zip code, country 
const ShoeSchema = new Schema({
    shoe: {
    shoeName: String,
    shoeSize: Number,
    colorLaces: String,
    colorOutsole: String,
    colorMidsole: String,
    colorOuterMaterial: String,
    colorMidMaterial: String,
    colorInnerMaterial: String,
    innerMaterial: String,
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: Number,
    address: String,
    city: String,
    state: String,
    zipCode: Number,
    country: String
    },
});

//export the model to use in index.js
const Shoe = mongoose.model('Shoe', ShoeSchema);
module.exports = Shoe;

