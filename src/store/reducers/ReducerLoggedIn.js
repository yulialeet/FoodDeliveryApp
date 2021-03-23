import {USER_LOGGED_IN} from '../actions/ActionIsLoggedIn'

const ReducerLoggedIn = (state, action) => {
    switch (action.type) {
        case USER_LOGGED_IN:
            return {
                ...state,
                isUserLoggedIn: action.payload
            }
        default: 
            return {
                ...state,
                isUserLoggedIn: state
            }
    }
}
export default ReducerLoggedIn