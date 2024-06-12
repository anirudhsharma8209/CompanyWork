const connection = require("../config/db");

const handleAllProducts = async (req, res) => { 
    try{
        let allProducts = await connection.query('Select * from public.products');
        if(allProducts.rows != 0) res.status(200).json(allProducts.rows)
        else res.status(400).json({error : "There is no records...."});
    }catch(error){
        console.log("Error Occour While Fetching the Products "); 
        res.status(400).json({error : "Not Found Records...."});
    }
}

const handleCreateProduct = async (req, res) => {
    try{
        let {title, description} = req.body;
        const createProduct = await connection.query('Insert into public.products (p_name, p_description) values($1, $2)', [title, description]);
        if(createProduct.rowCount != 0)res.status(200).json(req.body)
        else res.status(400).json({error : "There is no records....."});        
    }catch(error){
        console.log("Error Occour While Creting the Product "); 
        res.status(400).json({error : "Can't Created Record...."});
    }
}

const handleUpdateProduct = async (req, res) => {    
    try{
        let updateId  = req.body.id;
        let {title, description} = req.body;
        let updatedProduct = await connection.query('Update public.products set p_name=$1, p_description=$2 where p_id = $3', [title, description, updateId]);
        if(updatedProduct.rowCount != 0) res.stauts(200).json(req.body);        
        else res.status(400).json({error : "Can't Update the product...."});
    }catch(error){
        console.log("Error Occour While Upating the Product "); 
        res.status(400).json({error : "Can't Update Record...."});
    }
}

const handleDeleteProduct = async (req, res) => {
    try{
        let id = req.body.id
        let deleteProduct = await connection.query('Delete from public.products where p_id = $1', [id]);
        if(deleteProduct.rowCount != 0) res.status(200).json(req.body.id);
        else res.status(200).json(deleteProduct);
    }catch(error){
        console.log("Error While Deleting the Record.....");
        res.status(400).json({error : "Can't Delete Record....."});
    }
}

const handleSingleProduct = async (req, res) => {
    try{
        let id = req.body.id
        let singleProduct = await connection.query('Select * from public.products where p_id = $1', [id]);        
        if(singleProduct.rowCount != 0) res.status(200).json(singleProduct.rows);
        else res.status(400).json({error : "No Records where there with id sorry...."});
    }catch(error){
        console.log("Error While Selecting the Record.....");
        res.status(400).json({error : "Can't Delete Record....."});
    }
}   

module.exports = {
    handleAllProducts,
    handleCreateProduct,
    handleUpdateProduct,
    handleDeleteProduct,
    handleSingleProduct
}