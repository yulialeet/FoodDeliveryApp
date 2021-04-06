import {USER_ROLE} from '../actions/ActionUserRole'


const ReducerUserRole = (state, action) => {
    switch (action.type) {
        case USER_ROLE:
            return {
                ...state,
                UserRole: action.payload
            }
        default: 
            return {
                ...state,
            }
    }   
    
}
export default ReducerUserRole