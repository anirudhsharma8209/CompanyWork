import data from '../data/data.json';


const addProductToStore = (product : any, action : any) => {       
    product.push(action.payload)
    return {products : product}
}

const removeProductFromStore = (products : any, action : any) => {
    return {products : products.filter((item : any) => item.id !== action.payload.id)}
}

const updateProductToStore = (products : any, action : any) => {        
    products = products.map((item : any) => {
        if(item.id == action.payload.id){
            return action.payload 
        }else{
            return item
        }  
    })        
    return {products : products};
}

const searchProductFromStore = (products : any, action : any) => {
    console.log(action.payload);
    return {products : products.filter((item : any) => item.title == action.payload)}
}

const createdReducer = (state = data, action : any) => {
    switch(action.type){
        case 'ADDPRODUCT' : return addProductToStore(state.products, action);
        case 'REMOVEPRODUCT' : return removeProductFromStore(state.products, action);
        case 'UPDATEPRODUCT' : return updateProductToStore(state.products, action);
        case 'SEARCHPRODUCT': return searchProductFromStore(state.products, action);
        default : return state
    }
}

export default createdReducer;