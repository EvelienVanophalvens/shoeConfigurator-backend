const passport = require('passport');
const User = require('../models/User');

// CHANGE: USE "createStrategy" INSTEAD OF "authenticate"
passport.use(User.createStrategy());

// serializeUser determines which data of the user object should be stored in the session.
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//web token strategy
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({_id: jwt_payload.uid})
        .then(user => {
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
                // or you could create a new account
            }
        })
        .catch(err => done(err, false));
}));

module.exports = passport;