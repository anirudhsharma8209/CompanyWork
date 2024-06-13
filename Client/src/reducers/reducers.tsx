import data from '../data/data.json';


const addProductToStore = () => {

}

const removeProductFromStore = () => {
    
}

const updateProductToStore = () => {
    
}

const searchProductFromStore = () => {

}

const createdReducer = (state = data, action : any) => {
    switch(action.type){
        case 'ADDPRODUCT' : return addProductToStore();
        case 'REMOVEPRODUCT' : return removeProductFromStore();
        case 'UPDATEPRODUCT' : return updateProductToStore();
        case 'SEARCHPRODUCT': return searchProductFromStore();
        default : return state
    }
}

export default createdReducer;