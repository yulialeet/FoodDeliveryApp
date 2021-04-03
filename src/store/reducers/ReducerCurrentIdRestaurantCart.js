import {CURRENT_ID, CURRENT_NAMERESTAURANT} from '../actions/ActionCurrentIdRestaurantCart'


const ReducerCurrentIdRestaurantCart = (state, action) => {
    switch (action.type) {
        case CURRENT_ID:
            return {
                ...state,
                currentId: action.payload
            }
        case CURRENT_NAMERESTAURANT:
            return {
                ...state,
                currentName: action.payload
            }
        default: 
            return {
                ...state,
            }
    }   
    
}
export default ReducerCurrentIdRestaurantCart