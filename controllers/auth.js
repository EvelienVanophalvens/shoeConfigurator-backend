//require the user model
const User = require('../models/user');
const passport = require('../passport/passport');
const jwt = require('jsonwebtoken');

const signup = async (req, res, next) => {
    let email = req.body.email;
    let password = req.body.password;
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    const user = new User({username: email, email: email, firstname: firstname, lastname: lastname});
    await user.setPassword(password);
    await user.save().then(result => {
        let token = jwt.sign({
            uid: result._id,
            email: result.email,
            firstname: result.firstname,
            lastname: result.lastname
        }, 'secret');
        res.json({
            status: 'success',
            data: {
                token: token,
            }
        })
    }).catch(err => {
        res.json({
            status: 'error',
            message: err,
            data: req.body,
        })
    });
}

const login = async (req, res, next) => {
    const user = await User.authenticate()(req.body.email, req.body.password).then(result => {
        if (!result.user) {
            return res.json({
                status: 'error',
                message: 'Login failed'
            })

        }

        let token = jwt.sign({
            uid: result.user._id,
        }, 'secret');

        return res.json({
            status: 'success',
            data: {
                token: token,
            }
        });
    }).catch(err => {
        res.json({
            status: 'error',
            message: err
        })
    });
};

//export the createUser function
module.exports.signup = signup;
module.exports.login = login;
