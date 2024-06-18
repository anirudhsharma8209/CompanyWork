const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const generateToken = (username, secret) => {   
    return jwt.sign(username, secret);
}

const comparePassword =  (oldPassword, newPassword) => {
    return  bcrypt.compare(oldPassword, newPassword)
}

// Decode the actual String(Seret) 
// let decodeTheSecret = (req, res, next) => {     
//     bcrypt.genSalt(10,  (saltError,  string) => {        
//             bcrypt.hash(process.env.JWT_SECRET_KEY, string, (hashError, hashString) => {                                       
//                 bcrypt.compare(process.env.JWT_SECRET_KEY, hashString, (error, result) => {                                        
//                     if(result) return hashString;
//                     else console.log("You are unauthorized user....");
//                 }) 
//             })
//         }
//     )    
// }

module.exports = {    
    generateToken,
    comparePassword
};