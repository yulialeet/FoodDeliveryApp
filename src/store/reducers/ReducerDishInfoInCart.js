import {DISH_INFO_SHOPPING_CART, REMOVE_ALL_CART} from '../actions/ActionDishInfoInCart'

const initialState = {
    dishesInfo: []
}

const ReducerDishInfoInCart = (state = initialState, action) => {
    switch (action.type) {
        case DISH_INFO_SHOPPING_CART:
            return {
                ...state,
                AddInList: state.dishesInfo = state.dishesInfo.push(action.payload)
            }
        case REMOVE_ALL_CART:
            return {
                ...state,
                RemoveAllCart: state.dishesInfo.splice(0)
            }
        default: 
            return {
                ...state,
            }
    }   
    
}
export default ReducerDishInfoInCart