'use strict';
const { reset } = require('nodemon');
const firebase = require('../database');
const Products = require('../models/products');
const firestore = firebase.firestore();

const addProduct = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('Products').doc().set(data);
        res.send('Produto cadastrado com sucesso');
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllProducts = async (req, res, next) => {
    try {
        const products = await firestore.collection('Products');
        const data = await products.get();
        const productArray = [];

        if (data.empty) {
            res.status(404).send('Nenhum dado no DB');
        } else {
            data.forEach(doc => {
                const product = new Products(
                    doc.id,
                    doc.data().nome,
                    doc.data().tipo,
                    doc.data().valor,
                    doc.data().url,
                );
                productArray.push(product);
            });
            res.send(productArray)
            console.log(productArray[0])
        }
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}

const getOneProduct = async (req, res, next) => {
    try {
        const id = req.params.id
        const product = await firestore.collection('Products').doc(id);
        const data = await product.get();
        if (!data.exists) {
            res.status(404).send('Nenhum dado sobre este produto no DB');
        } else {
            res.send(data.data());
        }
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}

const updateProduct = async (req, res, next) => {
    try {
        const id = req.params.id
        const data = req.body;
        const product = await firestore.collection('Products').doc(id);
        await product.update(data);
        res.send('Você realizou a atualização com sucesso');
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteOne = async (req, res, next) => {
    try {
        const id = req.params.id;
        const product = await firestore.collection('Products').doc(id);
        await product.delete();

        res.send('Produto deletado!')
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteOne,
}