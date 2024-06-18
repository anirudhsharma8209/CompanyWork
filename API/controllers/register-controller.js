const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const connection = require("../config/db");
const RegisterModal = require("../models/register-modal");

const handleRegisterUser = async (req, res) => {         
    let {username, email, password}  = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const Newuser = {username, email, password : hashedPassword};        
    let success = await RegisterModal.getRegisterUser(Newuser);
    if(success == true) return res.status(200).json({created : Newuser});
    else if(Object.keys(success).includes("error")) return res.status(400).json(success);
}

module.exports = {
    handleRegisterUser
}