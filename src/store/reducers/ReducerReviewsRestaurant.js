import {TAKE_REVIEWS_LIST} from '../actions/ActionReviewsRestaurant'


const ReducerReviewsRestaurant = (state, action) => {
    switch (action.type) {
        case TAKE_REVIEWS_LIST:
            return {
                ...state,
                reviews: action.payload
            }
        default: 
            return {
                ...state,
            }
    }   
    
}
export default ReducerReviewsRestaurant