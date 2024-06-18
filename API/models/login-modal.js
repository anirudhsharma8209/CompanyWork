const connection = require("../config/db");

const getLoginUser = async (userInfo) => {
    try {        
        let { username, password } = userInfo;
        return await connection.query('Select * from public.users where u_name = $1', [username])        
    } catch (error) {
        console.log("Error Occour While Fetching the User.....");
        return {error : "Error Occour While Fetching the User....."}
    }
}

module.exports = {
    getLoginUser
}