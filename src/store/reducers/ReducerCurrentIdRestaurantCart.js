import {CURRENT_ID, CURRENT_NAMERESTAURANT, CURRENT_DELIVERYPRICES} from '../actions/ActionCurrentIdRestaurantCart'


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
        case CURRENT_DELIVERYPRICES:
            return {
                ...state,
                deliveryPrice: action.payload
            }
        default: 
            return {
                ...state,
            }
    }   
    
}
export default ReducerCurrentIdRestaurantCart