const express = require("express");
const ProductRouter = express.Router();
const ProductCotroller = require("../controllers/product-controller");

ProductRouter.route('/').get(ProductCotroller.handleAllProducts).post(ProductCotroller.handleCreateProduct);

ProductRouter.route("/:id").get(ProductCotroller.handeSingleProduct).put(ProductCotroller.handleUpdateProduct).delete(ProductCotroller.handleDeleteProduct);

module.exports = ProductRouter;