const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/api-civil');
mongoose.Promise = global.Promise;

module.exports = mongoose;

