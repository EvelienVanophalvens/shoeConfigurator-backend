//require the user model
const User = require('../../../models/user');

//create a new user asyn function

const createUser = async (req, res) => {
    let user = req.body;
    let newUser = new User(user);
    newUser.user = user;
    await newUser.save();
    res.json({
        status: 'success',
        data: [
            {
                user: newUser
            }
        ]
    })  
}

//make a login async function with find to find the user by email and password

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
module.exports.createUser = createUser;
module.exports.loginUser = loginUser;
