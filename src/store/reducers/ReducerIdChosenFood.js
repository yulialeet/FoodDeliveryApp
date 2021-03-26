import {ID_OF_FOOD} from '../actions/ActionIdChosenFood'

const ReducerIdChosenFood = (state, action) => {
    switch (action.type) {
        case ID_OF_FOOD:
            return {
                ...state,
                idFood: action.payload
            }
        default: 
            return {
                ...state
            }
    }
}
export default ReducerIdChosenFood