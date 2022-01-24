const express = require('express')
const Products = require('../models/products');
const InternalUsers = require('../models/internalUsers');
const authMiddleWare = require('../middlewares/auth');

const router = express.Router()

router.use(authMiddleWare);

router.get('/', async (req, res) => {
    const products = await Products.find({}).lean(); 
    return res.send(products)
})



router.post('/register', async (req, res) => {

    const { userId } = req

    const user = InternalUsers.findById(userId)

    if(!user) return res.status(405).send("User not allowed to register products")

    const product = req.body

    const products = await Products.create(product)

    return res.send(products)
})



module.exports = app => app.use('/products', router);