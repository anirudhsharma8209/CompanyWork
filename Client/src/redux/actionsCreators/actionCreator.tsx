
// import { PRODUCT } from "../../constant/constant"
import axios from "axios"
export function addProductAction(product: any) {
    return {
        type: 'ADDPRODUCT',
        payload: product
    }
}

export function deleteProductAction(product: any) {
    return {
        type: "REMOVEPRODUCT",
        payload: product
    }
}

export function updateProductAction(product: any) {
    return {
        type: "UPDATEPRODUCT",
        payload: product
    }
}

export function searchProductAction(product: any) {
    return {
        type: "SEARCHPRODUCT",
        payload: product
    }
}


export function getProductAction(API: string) {    
    return axios.get(API)
}


export function renderProducts(){
    return {
        type : "ALLPRODUCTS"        
    }
}