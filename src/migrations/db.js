const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/api-civil',
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log(" Mongoose is connected")
);

// require("./products");
// require("./internalUsers");
require("./externalUsers");
