import {SET_NAME_FOR_RESTAURANT} from '../actions/ActionRestaurantToFoodList'

const restaurantListToFoodList = (state, action) => {
    switch (action.type) {
        case SET_NAME_FOR_RESTAURANT:
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
export default restaurantListToFoodList