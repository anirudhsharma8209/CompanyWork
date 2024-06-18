const connection = require("../config/db")

const getRegisterUser = async (Newuser) => {
    let preChecker = await connection.query('SELECT * FROM public.users where u_name = $1 OR u_email = $2', [Newuser.username, Newuser.email]);
    console.log(preChecker.rowCount)
    if(!preChecker.rowCount){
        let insertedRecord = await connection.query('INSERT INTO public.users( u_name, u_email, u_password) VALUES ($1, $2, $3)', [Newuser.username, Newuser.email, Newuser.password]);                            
        if(insertedRecord.rowCount){
            return true;
        }else return {error : "Can't able to insert user....."};
    }else{
        return {error : "username or email already exist...."};
    }
}

module.exports = {
    getRegisterUser
}