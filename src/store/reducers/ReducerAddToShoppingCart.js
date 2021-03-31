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
            NewProducts = state.products
            
            const AddedIndex = state.products.findIndex(product => {
                return product.productid === action.payload.productid
            })

            const added = state.products[AddedIndex];
            
            const newProduct = added ? { ...added, countDish: added.countDish + action.payload.countDish } : action.payload;
            
            

            if (AddedIndex != -1) {
                //NewProducts = [...state.products][AddedIndex] = newProduct;
                NewProducts[AddedIndex] = newProduct
            } else {
                NewProducts = NewProducts.push(action.payload)
            }
            

            return {
                ...state,
                productToAdd: state.products = NewProducts
            };
        case REMOVE_PRODUCT:
            return {
                ...state,
                productToRemove: state.products.splice(indexOf(action.payload), 1)
            };
        case REMOVE_ALL_PRODUCTS:
            return {
                ...state,
                RemoveAll: state.products.splice(0)
            }
        default: 
            return state
    }
}
export default ReducerAddToShoppingCart