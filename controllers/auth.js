//require the user model
const User = require('../models/user');
const passport = require('../passport/passport');

const signup = async (req, res, next) => {
    let email = req.body.email;
    let password = req.body.password;
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    const user = new User({username: email, email: email, firstname: firstname, lastname: lastname});
    await user.setPassword(password);
    await user.save().then(result => {
        res.json({
            status: 'success',
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
        res.json({
            status: 'success',
            data: {
                user: result
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
