const LoginModal = require("../models/login-modal");
const Features = require("../services/feature");

const handleLoginUser = async (req, res) => {
    let {username, password} = req.body;
    let result = await LoginModal.getLoginUser(req.body);        
    if(result.rowCount === 0) return res.status(404).json({error : "No User Exist....."})
    else{
        let checkPassword = await Features.comparePassword(password, result.rows[0].u_password);
        if(checkPassword){
            let token = Features.generateToken(username, process.env.JWT_SECRET_KEY);
            return res.status(200).json({userFound : req.body, token});
        }else{
            return res.status(400).json({error : "Password did't matched"});     
        }                          
    }
}

module.exports = {
    handleLoginUser
}