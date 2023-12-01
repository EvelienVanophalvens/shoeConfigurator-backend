//require express
const express = require('express');

//create a router
const router = express.Router();

//require the controller
const shoesController = require('../../../controllers/api/v1/shoes');

//handle the post request coming to /api/v1/shoes
router.post('/', shoesController.createShoe);

//export the router
module.exports = router;