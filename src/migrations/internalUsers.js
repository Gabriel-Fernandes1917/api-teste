const mongoose = require('mongoose');
const Users = require('../models/internalUsers')

mongoose.Promise = global.Promise;

module.exports = mongoose;

const inserts = [    
{ 
    name: "admin",
    password: "admin",
    email: "admin@admin.com",
}
]


inserts.map( product => {
    try {
        Users.create(product)
    }catch(e){
        console.log(e)
    }
})


