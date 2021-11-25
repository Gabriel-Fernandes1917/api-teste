const mongoose = require('../database');

const ProductsScheema = new mongoose.Schema({
    chapa:{
        type: Number,
        require: false
    },
    aco:{
        type: Number,
        require: false
    },
    concreto:{
        type: Number,
        require: false
    },
    cimento:{
        type: Number,
        require: false
    },
    areia:{
        type: Number,
        require: false
    },
    brita:{
        type: Number,
        require: false
    },
    bloco_ceramico:{
        type: Number,
        require: false
    },
    bloco_concreto:{
        type: Number,
        require: false
    },
    telha_de_fibrocimento:{
        type: Number,
        require: false
    },
    porta_interna:{
        type: Number,
        require: false
    },
    esquadria:{
        type: Number,
        require: false
    },
    janela:{
        type: Number,
        require: false
    },
    fechadura:{
        type: Number,
        require: false
    },
    placa_ceramica:{
        type: Number,
        require: false
    },
    bancada:{
        type: Number,
        require: false
    },
    placa_gesso:{
        type: Number,
        require: false
    },
    vidro:{
        type: Number,
        require: false
    },
    tinta:{
        type: Number,
        require: false
    },
    emulsao:{
        type: Number,
        require: false
    },
    fio_cobre:{
        type: Number,
        require: false
    },
    disjuntor:{
        type: Number,
        require: false
    },
    bacia:{
        type: Number,
        require: false
    },
    registro:{
        type: Number,
        require: false
    },
    tubo_ferro:{
        type: Number,
        require: false
    },
    tubo_PVC:{
        type: Number,
        require: false
    },
    brita:{
        type: Number,
        require: false
    },

});


const Products = mongoose.model('Products', ProductsScheema) // exports class
module.exports = Products;