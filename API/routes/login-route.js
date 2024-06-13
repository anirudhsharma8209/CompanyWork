const express = require("express");
const LoginRoute = express.Router();
const LoginController = require("../controllers/login-controller");

LoginRoute.route("/").post(LoginController.handleLoginUser);


module.exports = LoginRoute;