//require express
const express = require('express');

//create a router
const router = express.Router();


const jwt = require('jsonwebtoken');

// Middleware to get user's ID from JWT
const getUserIdFromToken = (req, res, next) => {
    // Get the token from the Authorization header
    let token = req.headers.authorization.split(' ')[1];

    // Decode the token
    let decodedToken = jwt.verify(token, 'secret');

    // Add the user's ID to the request object
    req.userId = decodedToken.uid;

    next();
}



//require the controller
const userController = require('../../../controllers/Auth');

//handle the post request coming to /api/v1/shoes
router.post('/signup', userController.signup);

//handle the get request coming to /api/v1/shoes
router.post('/login', userController.login);

router.patch('/password', getUserIdFromToken ,userController.updatePassword);

//export the router
module.exports = router;