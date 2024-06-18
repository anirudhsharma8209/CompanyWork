import axios from 'axios';
// import data from '../../constant/data/data.json';
import {PRODUCT} from '../../constant/constant';

const addProductToStore = async (product : any, action : any) => {    
    let data = (await axios.post(PRODUCT.ADDPRODUCT, action.payload)).data
    return {proucts : data};    
}

const removeProductFromStore = (products : any, action : any) => {
    console.log(products);
    return {products : products.filter((item : any) => item.id !== action.payload.id)}
}

const updateProductToStore = (products : any, action : any) => {        
    products = products?.map((item : any) => {
        if(item.id == action.payload.id){
            return action.payload 
        }else{
            return item
        }  
    })        
    return {products : products};
}

const searchProductFromStore = (products : any, action : any) => {    
    return {products : products.filter((item : any) => item.title == action.payload)}
}

const getProductFromStore = () => {          
    return axios.get(PRODUCT.ALLPRODUCTS);
}

let products = {
    products : {}
}

const createdReducer = (state = products, action : any) => {
    switch(action.type){
        case 'ADDPRODUCT' : return addProductToStore(state, action);
        case 'REMOVEPRODUCT' : return removeProductFromStore(state.products, action);
        case 'UPDATEPRODUCT' : return updateProductToStore(state.products, action);
        case 'SEARCHPRODUCT': return searchProductFromStore(state.products, action);
        case 'ALLPRODUCTS' : return getProductFromStore();        
    }
}

export default  createdReducer;