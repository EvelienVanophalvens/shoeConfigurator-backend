const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//make a schema for a shoe configurator, with following fields: Shoe name, Shoe size, Color Laces, Color Outsole, Color Midsole, Color outer material, Color mid Material, Color inner Material, Inner Material, first name, last name, email, phone number, address, city, state, zip code, country 
const ShoeSchema = new Schema({
    shoeName: {
        type: String,
        required: true,
    },
    shoeSize: {
        type: Number,
        required: true,
    },
    colorLaces: {
        type: String,
        required: true,
    },
    colorOutsole: {
        type: String,
        required: true,
    },
    colorMidsole: {
        type: String,
        required: true,
    },
    colorOuterMaterial: {
        type: String,
        required: true,
    },
    colorMidMaterial: {
        type: String,
        required: true,
    },
    innerMaterial: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    street: {
        type: String,
        required: true,
    },
    houseNumber: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true
    },
    zipCode: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: "pending",
    },
    orderDate: {
        type: Date,
        default: Date.now,
    },
    orderNumber: { type: Number, required: true, unique: true },
});


//export the model to use in index.js
const Shoe = mongoose.model('Shoe', ShoeSchema);
module.exports = Shoe;

