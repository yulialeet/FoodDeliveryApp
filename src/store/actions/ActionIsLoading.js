export const IS_LOADING = 'IS_LOADING'
export const IS_LOADING_REVIEWS = 'IS_LOADING_REVIEWS'

export const ActionIsLoading = (isLoading) => ({ 
        type: IS_LOADING,
        payload: isLoading
})

export const ActionPressReviews = (isLoadingR) => ({ 
    type: IS_LOADING_REVIEWS,
    payload: isLoadingR
})