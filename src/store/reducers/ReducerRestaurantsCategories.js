import {TAKE_RESTAURANT_CATEGORIES_LIST} from '../actions/ActionRestaurantsCategories'


const ReducerRestaurantsCategories = (state, action) => {
    switch (action.type) {
        case TAKE_RESTAURANT_CATEGORIES_LIST:
            return {
                ...state,
                CategoriesList: action.payload
            }
        default: 
            return {
                ...state,
            }
    }   
    
}
export default ReducerRestaurantsCategories