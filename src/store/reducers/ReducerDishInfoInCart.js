import {DISH_INFO_SHOPPING_CART} from '../actions/ActionDishInfoInCart'

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
        default: 
            return {
                ...state,
            }
    }   
    
}
export default ReducerDishInfoInCart