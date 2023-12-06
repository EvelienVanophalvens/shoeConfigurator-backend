//require the model
const Shoe = require('../../../models/Shoe');

//create a new shoe asyn function

const createShoe = async (req, res) => {
    let shoe = req.body;
    let newShoe = new Shoe(shoe);
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

//get all shoes async function
const getAllShoes = async (req, res) => {
    let shoes = await Shoe.find();
    res.json({
        status: 'success',
        data: [
            {
                shoes: shoes
            }
        ]
    })
}

//export the createShoe function
module.exports.createShoe = createShoe;
module.exports.getAllShoes = getAllShoes;

