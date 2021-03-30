import {ADD_TO_CART, ALL_PRODUCTS, REMOVE_PRODUCT, REMOVE_ALL_PRODUCTS} from '../actions/ActionAddToShoppingCart'

const initialState = {
    products: []
}

const ReducerAddToShoppingCart = (state = initialState, action) => {
    switch (action.type) {
        case ALL_PRODUCTS:
            return {
                ...state,
                products: initialState.products
            }
        case ADD_TO_CART:
            return {
                ...state,
                productToAdd: initialState.products.push(action.payload)
            };
        case REMOVE_PRODUCT:
            return {
                ...state,
                productToRemove: initialState.products.splice(indexOf(action.payload), 1)
            };
        case REMOVE_ALL_PRODUCTS:
            return {
                ...state,
                RemoveAll: initialState.products.splice(0)
            }
        default: 
            return state
    }
}
export default ReducerAddToShoppingCart