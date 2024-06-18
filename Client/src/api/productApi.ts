import { getProductAction, addProductAction, updateProductAction, deleteProductAction } from "../redux/actionsCreators/actionCreator";
import store from "../redux/store/Store";

export const getAllProductsFromDatabase = (APIENDPOINT : string) => {    
    try{        
        store.dispatch(getProductAction())
        return {products : store.getState()};
    }catch(error){
        console.log(error);
    }
}

export const addProductToDatabase = (APIENDPOINT : string) => {
    try{
        store.dispatch(addProductAction(APIENDPOINT));
        return {};
    }catch(error){
        console.log(error);
    }
}

export const updateProductToDatabase = (APIENDPOINT : string) => {
    try{
        store.dispatch(updateProductAction(APIENDPOINT));
        return {};
    }catch(error){
        console.log(error);
    }
}

export const delteProductFromDatabase = (APIENDPOINT : string) => {
    try{
        store.dispatch(deleteProductAction(APIENDPOINT));
        return {};
    }catch(error){
        console.log(error);
    }
}