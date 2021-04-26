import {IS_LOADING, IS_LOADING_REVIEWS} from '../actions/ActionIsLoading'

const ReducerIsLoading = (state, action) => {
    switch (action.type) {
        case IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        case IS_LOADING_REVIEWS:
            return {
                ...state,
                isLoadingR: action.payload
            }
        default: 
            return {
                ...state
            }
    }
}
export default ReducerIsLoading