//require express
const express = require('express');

//create a router
const router = express.Router();

//require the controller
const userController = require('../../../controllers/auth');

//handle the post request coming to /api/v1/shoes
router.post('/signup', userController.signup);

//handle the get request coming to /api/v1/shoes
router.post('/login', userController.login);

//export the router
module.exports = router;