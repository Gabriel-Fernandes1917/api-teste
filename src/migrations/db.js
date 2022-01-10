const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://atlas:atlas%40123@cluster0.fdeis.mongodb.net/api-civil",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log(" Mongoose is connected")
);

// require("./products");
// require("./internalUsers");
require("./externalUsers");
