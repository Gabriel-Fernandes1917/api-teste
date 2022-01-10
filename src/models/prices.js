const mongoose = require('../database');
var Schema = mongoose.Schema;
  

const PriceSchema = new mongoose.Schema({  
      productId: {
          type: Schema.Types.ObjectId, 
          ref: 'Products'
      },
      enterpriseId: {
        type: "String", // cnpj
      },
     
      value: {
          type: Number
      },
      createBy: {
        type: Schema.Types.ObjectId, 
      },
      createAt:{ 
        type: Date,
        default: Date.now,
    }
});


module.exports = mongoose.model('Prices', PriceSchema) // exports class