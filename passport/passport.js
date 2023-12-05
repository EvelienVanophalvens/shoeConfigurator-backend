const passport = require('passport');
const User = require('../models/user');

// CHANGE: USE "createStrategy" INSTEAD OF "authenticate"
passport.use(User.createStrategy());

// serializeUser determines which data of the user object should be stored in the session.
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());