const mongoose = require('../database');
const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId


const ProductsScheema = new mongoose.Schema({
    ref: {
        type: Schema.ObjectId,
        default: new ObjectId()
    },
    name: {
        type: String,
        unique: true
    },
    description: {
        type: String
    },
    unit: {
        type: String
    },
});


const Products = mongoose.model('Products', ProductsScheema) // exports class
module.exports = Products;