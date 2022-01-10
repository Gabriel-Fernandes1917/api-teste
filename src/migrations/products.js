const mongoose = require('mongoose');
const Products = require('../models/products')

mongoose.Promise = global.Promise;

module.exports = mongoose;

const inserts = [
  { name: "chapa", dexcription: "", unit: "m²" },
  { name: "aco", dexcription: "", unit: 654 },
  { name: "concreto", dexcription: "", unit: 654 },
  { name: "cimento", dexcription: "", unit: 654 },
  { name: "areia", dexcription: "", unit: 654 },
  { name: "brita", dexcription: "", unit: 654 },
  { name: "bloco_ceramico", dexcription: "", unit: 654 },
  { name: "bloco_concreto", dexcription: "", unit: 654 },
  { name: "telha_de_fibrocimento", dexcription: "", unit: 654 },
  { name: "porta_interna", dexcription: "", unit: 654 },
  { name: "esquadria", dexcription: "", unit: 654 },
  { name: "janela", dexcription: "", unit: 654 },
  { name: "fechadura", dexcription: "", unit: 654 },
  { name: "placa_ceramica", dexcription: "", unit: 654 },
  { name: "bancada", dexcription: "", unit: 654 },
  { name: "placa_gesso", dexcription: "", unit: 654 },
  { name: "vidro", dexcription: "", unit: 654 },
  { name: "tinta", dexcription: "", unit: 654 },
  { name: "emulsao", dexcription: "", unit: 654 },
  { name: "fio_cobre", dexcription: "", unit: 654 },
  { name: "disjuntor", dexcription: "", unit: 654 },
  { name: "bacia", dexcription: "", unit: 654 },
  { name: "registro", dexcription: "", unit: 654 },
  { name: "tubo_ferro", dexcription: "", unit: 654 },
  { name: "tubo_PVC", dexcription: "", unit: 654 },
  { name: "brita", dexcription: "", unit: 654 },
]


inserts.map( product => {
    try {
        Products.create(product)
    }catch(e){
        console.log(e)
    }
  
})


