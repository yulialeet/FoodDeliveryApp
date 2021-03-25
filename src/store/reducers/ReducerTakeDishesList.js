import {TAKE_DISHES_LIST} from '../actions/ActionTakeDishesList'


const ReducerTakeDishesList = (state, action) => {
    switch (action.type) {
        case TAKE_DISHES_LIST:
            return {
                ...state,
                DishesList: action.payload
            }
        default: 
            return {
                ...state,
            }
    }   
    
}
export default ReducerTakeDishesList