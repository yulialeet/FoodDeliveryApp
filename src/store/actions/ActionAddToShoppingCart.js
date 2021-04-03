export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const ALL_PRODUCTS = 'ALL_PRODUCTS'
export const REMOVE_ALL_PRODUCTS = 'REMOVE_ALL_PRODUCTS'

export const AddProduct = (productid, countDish) => ({ 
        type: ADD_TO_CART,
        payload: {productid, countDish}
})

export const RemoveProduct = (productid, countDish) => ({
        type: REMOVE_PRODUCT,
        payload: {productid, countDish}
})

export const AllProducts = (productid) => ({
        type: ALL_PRODUCTS,
        payload: {productid}
})

export const RemoveAllProducts = () => ({
        type: REMOVE_ALL_PRODUCTS
});