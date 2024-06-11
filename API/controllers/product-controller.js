const connection = require("../config/db");

const handleAllProducts = async (req, res) => { 
    try{
        let allProducts = await connection.query('Select * from product_schema.product');
        res.status(200).json(allProducts);
    }catch(error){
        console.log(error);
    }
}

const handleCreateProduct = async (req, res) => {
    try{
        let createProduct = await connection.query('Insert into product_schema.product (title, description) values ($1, $2)', [title, description]);
        res.status(200).json(createProduct);
    }catch(error){
        console.log(error);
    }
}

const handleUpdateProduct = async (req, res) => {
    try{
        let updatedProduct = await connection.query('Upate product_scehma.product set title=$1, description=$2 where id = $3', [title, description, id]);
        res.status(200).json(updatedProduct);
    }catch(error){
        console.log(error);
    }
}

const handleDeleteProduct = async (req, res) => {
    try{
        let deleteProduct = await connection.query('Delete from product_scehma.product where id = $1', [id]);
        res.status(200).json(deleteProduct);
    }catch(error){
        console.log(error);
    }
}

const handleSingleProduct = async (req, res) => {
    try{
        let singleProduct = await connection.query('Select * from product_schema.product where id = $1', [id]);
        res.status(200).json(singleProduct);
    }catch(error){
        console.log(error);
    }
}   

module.exports = {
    handleAllProducts,
    handleCreateProduct,
    handleUpdateProduct,
    handleDeleteProduct,
    handleSingleProduct
}