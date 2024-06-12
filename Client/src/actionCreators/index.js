export function addProductCreator(product) {
    console.log("Action")
    return {
        type : 'ADDPRODUCT',
        payload : product
    }
}