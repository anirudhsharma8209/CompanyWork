const BASE_URL = "http://localhost:4500/api";

export const AUTH = {
    LOGINUSER : `${BASE_URL}/loginuser`,
    REGISTERUSER : `${BASE_URL}/registeruser`
}

export const PRODUCT = {
    ADDPRODUCT : `${BASE_URL}/products`,
    REMOVEPRODUCT : `${BASE_URL}/products`,
    UPDATEPRODUCT : `${BASE_URL}/products/id`,
    ALLPRODUCTS : `${BASE_URL}/products`
}