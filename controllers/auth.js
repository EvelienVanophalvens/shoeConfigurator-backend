//require the user model
const User = require('../models/user');
const passport = require('../passport/passport');

const signup = async (req, res, next) => {
    let email = req.body.email;
    let password = req.body.password;
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    const user = new User({email: email, firstname: firstname, lastname: lastname});
    await user.setPassword(password);
    await user.save().then(result => {
        res.json({
            status: 'success',
        })
    }).catch(err => {
        res.json({
            status: 'error',
            message: err
        })
    });
}


const loginUser = async (req, res) => {
    let user = req.body;
    let foundUser = await User.find(user);
    res.json({
        status: 'success',
        data: [
            {
                user: foundUser
            }
        ]
    })
}

//export the createUser function
module.exports.signup = signup;
module.exports.loginUser = loginUser;
