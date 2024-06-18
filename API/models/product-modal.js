const connection = require("../config/db");

const getAllProducts = async () => {
    try{
        return await connection.query('Select * from public.products');                
    }catch(error){
        console.log("Error Occour While Fetching the Products....."); 
        return {error : "Error While Fetching Records......"};
    }
}

const getSingleProduct = async (productId) => {
    try{
        return await connection.query("Select * from public.products where id  = $1", [productId]);
    }catch(error){
        console.log("Error Occour While Fetching the Product......");
        return {error : "Error While Fetching the Record......."};
    }
}

const createProduct = async (product) => {
    try{        
        return await connection.query("Insert into public.products (title, description, images) values($1, $2, $3) ", [product.title, product.description, product.images])        
    }catch(error){
        console.log("Error Occour While Creating or Inserting Record in Database");
        return {error :"Error While Creating the Record......."};
    }
}

const updateProduct = async (updateProduct) => {    
    try{
        return await connection.query("Update public.products set title = $1, description = $2, images = $3 where id = $4", [updateProduct.title, updateProduct.description, updateProduct.images, updateProduct.id])
    }catch(error){
        console.log("Error Occour While Updating the Record in Database");
        return {error : "Error While Updating the Record......."};
    }
}

const deleteProduct = async (deleteProductId) => {    
    try{
        return await connection.query("Delete from public.products where id = $1", [deleteProductId]);
    }catch(error){
        console.log("Error Occcur While Deleting the Record from Database");
        return {error : "Error Whiole Deleting the Record....."};
    }
}

module.exports = {
    getAllProducts,
    getSingleProduct,
    createProduct,
    updateProduct,
    deleteProduct
}