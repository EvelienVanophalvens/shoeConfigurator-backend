const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const port = 3000;

// Connect to DB
mongoose.connect(process.env.MONGODB);
const db = mongoose.connection;

//check if the connection is successful
db.on('error', console.error.bind(console, 'connection error:'));

//import routers
const shoesRouter = require('./routes/api/v1/shoes');
app.use(express.json());

//use the routers
app.use('/api/v1/shoes', shoesRouter);



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
