const express = require("express");
const ProductRouter = express.Router();
const ProductController = require("../controllers/product-controller");

ProductRouter.route("/").get(ProductController.handleAllProducts).post(ProductController.handleCreateProduct);

ProductRouter.route("/:id").put(ProductController.handleUpdateProduct).delete(ProductController.handleDeleteProduct);

module.exports = ProductRouter;