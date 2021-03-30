import {CURRENT_ID} from '../actions/ActionCurrentIdRestaurantCart'


const ReducerCurrentIdRestaurantCart = (state, action) => {
    switch (action.type) {
        case CURRENT_ID:
            return {
                ...state,
                currentId: action.payload
            }
        default: 
            return {
                ...state,
            }
    }   
    
}
export default ReducerCurrentIdRestaurantCart