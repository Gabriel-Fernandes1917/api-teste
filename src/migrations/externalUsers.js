const mongoose = require('mongoose');
const Users = require('../models/externalUsers')

mongoose.Promise = global.Promise;

module.exports = mongoose;

const inserts = [    
{ 
    name: "admin",
    password: "admin",
    email: "admin@admin.com",
    cnpj: "0000.000.000/0000"
}
]


inserts.map( product => {
    try {
        Users.create(product)
    }catch(e){
        console.log(e)
    }
})


