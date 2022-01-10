const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

require('./controllers/authController')(app);
require('./controllers/projectController')(app);
require('./controllers/productsController')(app);
require('./controllers/pricesController')(app);


app.listen(3000, console.log("Mission passed "));