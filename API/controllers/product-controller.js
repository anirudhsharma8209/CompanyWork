const connection = require("../config/db");
const ProductModal = require("../models/product-modal");

const handleAllProducts = async (req, res) => {
    let result = await ProductModal.getAllProducts();
    if(result.rowCount != 0)
        return res.status(200).json({products : result.rows});    
    else 
        return res.status(204).json({error : "No Records Found in Database......."})
}

const handeSingleProduct = async (req, res) => {        
    if(Object.values(req.params).includes("id")){
        let result = await ProductModal.getSingleProduct(req.body.id);
        if(result.rowCount != 0) 
            return res.status(200).json({products : result.rows});
        else 
            return res.status(204).json({error :  "No Such Record Found with id......."});
    }else{
        return res.status(404).json({error : "No Such Route Desinged...."});
    }
}

const handleCreateProduct = async (req, res) => {
    console.log(req.body);
    if(Object.keys(req.body).includes("title") && Object.keys(req.body).includes("description") && Object.keys(req.body).includes("images")){
        let insertObj = {title : req.body.title, description : req.body.description, images : req.body.images[0]};        
        let result = await ProductModal.createProduct(insertObj)            
        if(result.rowCount != 0) return res.status(202).json({created : req.body});            
        else return res.status(404).json({error : "Can't able to create...."});
    }else{
        return res.status(400).json({error : "Bad request"});
    }    
}

const handleUpdateProduct = async (req, res) => {    
    if(Object.values(req.params).includes("id")){
        if(Object.keys(req.body).includes("title") && Object.keys(req.body).includes("description") && Object.keys(req.body).includes("images")){            
            console.log(req.body)            
            let result = await ProductModal.updateProduct(req.body);
            if(result.rowCount != 0) return res.status(202).json({updated : req.body});
            else return res.status(204).json({error : "Can't able to create record"});
        }else{
            return res.status(400).json({error : "Bad request"});
        }
    }
}

const handleDeleteProduct = async (req, res) => {
    let revID = req.params.id.slice(req.params.id.indexOf("=")+1)
    if(Object.keys(req.params).includes("id")){
        let getData = await ProductModal.getSingleProduct(revID);        
        if(getData.rowCount != 0){
            let result = await ProductModal.deleteProduct(revID);        
            if(result.rowCount != 0) return res.status(202).json({deleted : getData.rows})
        }else{
            return res.status(404).json({msg : "No Records Found...."});
        }
    }else{
        return res.status(404).json({error : "No Such Route Desinged...."});
    }
}

module.exports = {
    handleAllProducts,
    handeSingleProduct,
    handleCreateProduct,
    handleUpdateProduct,
    handleDeleteProduct
}