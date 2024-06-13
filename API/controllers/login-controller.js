const jwt  = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const connection = require("../config/db");

const handleLoginUser = async (req, res) => {
    try{
        let {username, password} = req.body;
        let singleUser = await connection.query('Select * from public.users where u_name = $1', [username])        
        if(!singleUser.rowCount) return res.status(400).json({error : "no user exist....."});                
        else{            
            const checkPassword = await bcrypt.compare(password, singleUser.rows[0].u_password);            
            if(checkPassword){
                return res.status(200).json({userFound : req.body});
                let token = jwt.sign({u_id : req.body.id} ,process.env.JWT_SECRET_KEY);
                console.log(token)
                res.status(200).json(token);
            }
            if(!checkPassword) return res.status(400).json({error : "Password did't matched"});            
        }            
    }catch(error){
        console.log(error);
    }
}

module.exports = {
    handleLoginUser
}