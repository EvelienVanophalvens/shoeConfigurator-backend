//require the model
const Shoe = require('../../../models/Shoe');

//create a new shoe asyn function

const createShoe = async (req, res) => {
    let shoe = req.body.shoe;
    let newShoe = new Shoe();
    newShoe.shoe = shoe;
    await newShoe.save();
    res.json({
        status: 'success',
        data: [
            {
                shoe: newShoe
            }
        ]
    })  
}

//export the createShoe function
module.exports.createShoe = createShoe;

