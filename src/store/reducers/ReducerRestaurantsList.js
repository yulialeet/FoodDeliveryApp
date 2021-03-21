import {RENDER_RESTAURANTS_LISTT} from '../actions/ActionTakeRestaurtantsList'


const reducerRestaurantsList = (state, action) => {
    switch (action.type) {
        case RENDER_RESTAURANTS_LISTT:
            return {
                ...state,
                RestaurantsListFromServer: action.payload
            }
        default: 
            return {
                RestaurantsListFromServer: 'gglol'
            }
    }   
    
}
export default reducerRestaurantsList