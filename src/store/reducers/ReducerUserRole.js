import {USER_ROLE, USER_ID, CLIENT_ID} from '../actions/ActionUserRole'


const ReducerUserRole = (state, action) => {
    switch (action.type) {
        case USER_ROLE:
            return {
                ...state,
                UserRole: action.payload
            }
        case USER_ID:
            return {
                ...state,
                UserId: action.payload
            }
        case CLIENT_ID:
            return {
                ...state,
                clientId: action.payload
            }
        default: 
            return {
                ...state,
            }
    }   
    
}
export default ReducerUserRole