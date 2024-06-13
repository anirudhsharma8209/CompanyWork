const express = require("express");
const RegisterRouter = express.Router();
const RegisterController = require("../controllers/register-controller");

RegisterRouter.route("/").post(RegisterController.handleRegisterUser);

module.exports = RegisterRouter;