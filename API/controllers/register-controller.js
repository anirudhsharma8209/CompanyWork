const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const connection = require("../config/db");


const handleRegisterUser = async (req, res) => {         
    let {username, email, password}  = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const Newuser = {username, email, password : hashedPassword};    
    let existUser = await connection.query('SELECT * FROM public.users where u_name = $1 OR u_email = $2', [Newuser.username, Newuser.email]);
    if(existUser.rowCount == 0){        
        await connection.query('INSERT INTO public.users( u_name, u_email, u_password) VALUES ($1, $2, $3)', [Newuser.username, Newuser.email, Newuser.password]);            
        let token = jwt.sign({username, email}, process.env.JWT_SECRET_KEY);                        
        res.status(200).json({created : Newuser, token});
    }else{
        res.status(400).json({error : "username or email already exist...."});
    }    
}

module.exports = {
    handleRegisterUser
}