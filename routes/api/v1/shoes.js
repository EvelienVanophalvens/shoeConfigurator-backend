//require express
const express = require('express');
const passport = require('passport');

//create a router
const router = express.Router();

//require the controller
const shoesController = require('../../../controllers/api/v1/shoes');

//handle the post request coming to /api/v1/shoes
router.post('/', shoesController.createShoe);

//handle the get request coming to /api/v1/shoes
router.get('/',  passport.authenticate('jwt', { session: false }) , shoesController.getAllShoes);

//handle the get requests for id
router.get('/:id', passport.authenticate('jwt', { session: false }) , shoesController.getShoeById);

router.patch('/:id', passport.authenticate('jwt', { session: false }) , shoesController.patchShoeById);

router.delete('/:id', passport.authenticate('jwt', { session: false }) , shoesController.removeShoeById);
//export the router
module.exports = router;