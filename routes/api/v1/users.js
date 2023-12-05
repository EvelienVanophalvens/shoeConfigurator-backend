//require express
const express = require('express');

//create a router
const router = express.Router();

//require the controller
const shoesController = require('../../../controllers/auth');

//handle the post request coming to /api/v1/shoes
router.post('/signup', shoesController.signup);

//handle the get request coming to /api/v1/shoes
router.post('/login', shoesController.login);

//export the router
module.exports = router;