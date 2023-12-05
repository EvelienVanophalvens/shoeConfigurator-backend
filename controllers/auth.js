//require the user model
const User = require('../models/user');
const passport = require('../passport/passport');

const signup = async (req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;
    const user = new User({username: username});
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
