import {TAKE_DISHES_CATEGORIES_LIST} from '../actions/ActionDishesCategories'


const ReducerDishesCategories = (state, action) => {
    switch (action.type) {
        case TAKE_DISHES_CATEGORIES_LIST:
            return {
                ...state,
                DishesCategories: action.payload
            }
        default: 
            return {
                ...state,
            }
    }   
    
}
export default ReducerDishesCategories