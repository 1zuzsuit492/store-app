const express = require('express');
const products = express.Router();
const { getAllProducts, addNewProducts, getProduct, deleteProduct, updateProduct } = require('../queries/products');


// here we use the function we wrote inside of our queries. 
// we have to await it because we dont want this file to move 
// on to the next lines of code without this one finishing,
//  even though we are already using await in the queries file

//ALL PRODUCTS
products.get('/', async (request, response) => {
    console.log("GET request to /products");
    const products = await getAllProducts();
    response.status(200).json(products);
});

//ADD ITEM
products.post('/', async (request, response) => {
    const newProducts = await addNewProducts(request.body);
    response.status(200).json(newProducts);
})

//SHOW PRODUCTS
products.get('/:id', async (request, response) => { 
    console.log("GET request to /products/:id");
    const {id} = request.params; 
    const product = await getProduct(id);
    response.status(200).json(product);
}) //index

products.delete('/:id', async (request, response) => {
const {id} = request.params;
const product = await deleteProduct(id);
response.status(200).json(product);    
})

//destroy
    products.put('/:id', async (request, response) => {
    const {id} = request.params;
    const product = await deleteProduct(id);
    response.status(200).json(product);    
    })

    //update
    products.put(':/id', async (request, response) => {
    console.log("UPDATE request to /products/:id");
    const {id} = request.params;
    const product = await updateProduct(request.body, id);
    response.status(200).json(product);
    })



module.exports = products;