import {RENDER_RESTAURANTS_LISTT} from '../actions/ActionTakeRestaurantsList'


const reducerRestaurantsList = (state, action) => {
    switch (action.type) {
        case RENDER_RESTAURANTS_LISTT:
            return {
                ...state,
                RestaurantsListFromServer: action.payload
            }
        default: 
            return {
                ...state,
                //RestaurantsListFromServer: state
            }
    }   
    
}
export default reducerRestaurantsList