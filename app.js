var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose  = require('mongoose');
const passport = require('passport');

require('dotenv').config();

var app = express();

const cors = require('cors');

//use cors
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//connect to mongodb
const credentials = "/etc/secrets/certificate.pem";
mongoose.connect("mongodb+srv://swear.vqxzx7k.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority", {
    tlsCertificateKeyFile: credentials,
});

//check connection 
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Connected to MongoDB!");


//import routers
const shoesRouter = require('./routes/api/v1/shoes');
const usersRouter = require('./routes/api/v1/users');

//use the routers
app.use('/api/v1/shoes',shoesRouter);
app.use('/api/v1/users', usersRouter);
});

module.exports = app;
