import {MANAGER_INFO} from '../actions/ActionManagerInfo'

const ReducerManagerInfo = (state, action) => {
    switch (action.type) {
        case MANAGER_INFO:
            return {
                ...state,
                infoManager: action.payload
            }
        default: 
            return {
                ...state
            }
    }
}
export default ReducerManagerInfo