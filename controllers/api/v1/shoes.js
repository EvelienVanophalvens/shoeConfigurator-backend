//require the model
const Shoe = require('../../../models/Shoe');

//create a new shoe asyn function

const createShoe = async (req, res) => {
    let shoe = req.body;
    let newShoe = new Shoe(shoe);
    newShoe.orderNumber = Math.floor(Math.random() * 1000000);
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

const getShoeById = async (req, res) => {
    let shoe = await Shoe.findById(req.params.id);
    res.json({
        status: 'success',
        data: [
            {
                shoe: shoe
            }
        ]
    })
}

//patch shoe by id async function
const patchShoeById = async (req, res) => {
    let shoe = await Shoe.findById(req.params.id);
    shoe.status = req.body.status;
    await shoe.save();
    res.json({
        status: 'success',
        data: [
            {
                shoe: shoe
            }
        ]
    })
}
const removeShoeById = async (req, res) => {
    let shoe = await Shoe.findOneAndDelete(req.params.id);
    res.json({
        status: 'success',
        data: [
            {
                shoe: shoe
            }
        ]
    })
}
//export the createShoe function
module.exports.createShoe = createShoe;
module.exports.getAllShoes = getAllShoes;
module.exports.getShoeById = getShoeById;
module.exports.patchShoeById = patchShoeById;
module.exports.removeShoeById = removeShoeById;

