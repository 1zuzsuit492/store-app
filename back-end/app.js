// DEPENDENCIES
const cors = require("cors");
const express = require("express");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// ROUTES
const productController = require('./controllers/productController');
app.use('/products', productController);

app.get('/', (request, response) => {
response.status(200).send('Welcome to la bodega!')
});

app.get('*', (request, response) => {
response.status(404).send("Wrong way buddy.")
})


// EXPORT
module.exports = app;
