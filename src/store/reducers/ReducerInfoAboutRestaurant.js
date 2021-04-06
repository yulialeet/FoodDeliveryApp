import {TAKE_INFO_ABOUT_RESTAURANT} from '../actions/ActionInfoAboutRestaurant'


const ReducerInfoAboutRestaurant = (state, action) => {
    switch (action.type) {
        case TAKE_INFO_ABOUT_RESTAURANT:
            return {
                ...state,
                infoRestaurant: action.payload
            }
        default: 
            return {
                ...state,
            }
    }   
    
}
export default ReducerInfoAboutRestaurant