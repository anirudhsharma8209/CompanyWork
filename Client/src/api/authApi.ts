import {AUTH} from '../constant/constant';
import axios from 'axios';
import Cookie from 'js-cookie';

export const loginUserAuth = (user : any) => {
    console.log(user)
    try{
        let response;
        (async () => {
            response = await axios.post(AUTH.LOGINUSER, user);
            Cookie.set("token", response.data.token);
        })()
        return true;
    }catch(error){
        return error;        
    }
}