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

// Connect to DB
mongoose.connect(process.env.MONGODB);
const db = mongoose.connection;

//check if the connection is successful
db.on('error', console.error.bind(console, 'connection error:'));

//import routers
const shoesRouter = require('./routes/api/v1/shoes');
const usersRouter = require('./routes/api/v1/users');
app.use(express.json());

//use the routers
app.use('/api/v1/shoes',shoesRouter);
app.use('/api/v1/users', usersRouter);



module.exports = app;
