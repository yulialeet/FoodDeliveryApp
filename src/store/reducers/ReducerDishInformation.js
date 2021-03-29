import {DISH_INFO} from '../actions/ActionDishInformation'

const ReducerDishInformation = (state, action) => {
    switch (action.type) {
        case DISH_INFO:
            return {
                ...state,
                dishInfo: action.payload
            }
        default: 
            return {
                ...state
            }
    }
}
export default ReducerDishInformation