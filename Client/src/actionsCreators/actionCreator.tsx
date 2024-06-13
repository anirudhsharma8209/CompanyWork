export function addProductAction(product : any){
    return {
        type : 'ADDPRODUCT',
        payload : product
    }
}

export function deleteProductAction(product : any){
    return {
        type : "REMOVEPRODUCT",
        payload : product
    }
}

export function updateProductAction(product : any){
    return {
        type : "UPDATEPRODUCT",
        payload : product
    }
}

export function seatchProductAction(product : any){
    return {
        type : "SEARCHPRODUCT",
        payload : product
    }
}