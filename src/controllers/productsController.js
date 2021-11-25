const express = require('express')
const Products = require('../models/products');

const router = express.Router()

router.post('/registerproducts', async(req, res)=>{
    const {chapa, aco,brita,concreto,cimento, areia,bloco_ceramico, bloco_concreto, telha_de_fibrocimento, porta_interna, esquadria, janela,
        fechadura, placa_ceramica, bancada, placa_gesso, vidro, tinta, emulsao, fio_cobre, disjuntor, bacia, registro, tubo_ferro, tubo_PVC} = req.body;

    
    const products = Products.create(req.body)
    
    //res.send("enviado! ");
    await res.send("enviado! ");

   /* products, function(err, result) {
        if(!err){
            console.log("deu ruim nessa merda !! ")
            
        }else{
            console.log(" Mission Passed + respect ! ")
        }
    }*/

    return products;
})


module.exports = app => app.use('/products', router);