import {NAME_OF_RESTAURANT} from '../actions/ActionRestaurantNameHeader'

const ReducerRestaurantNameHeder = (state, action) => {
    switch (action.type) {
        case NAME_OF_RESTAURANT:
            return {
                ...state,
                nameRestaurant: action.payload
            }
        default: 
            return {
                ...state
            }
    }
}
export default ReducerRestaurantNameHeder