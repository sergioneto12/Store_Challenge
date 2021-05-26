const { Router } = require('express');
const express = require('express');
const { 
    addProduct, 
    getAllProducts, 
    getOneProduct, 
    deleteOne, 
    updateProduct 
} = require('../controller/productController');

const route = express.Router();

route.post('/Product', addProduct);

route.get('/Products', getAllProducts); 
route.get('/Products/:id', getOneProduct);

route.patch('/Products/:id', updateProduct)

route.delete('/Products/:id', deleteOne)

module.exports = {
    routes: route,
}