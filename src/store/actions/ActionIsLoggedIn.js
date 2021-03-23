export const USER_LOGGED_IN = 'USER_LOGGED_IN'

export const ActionIsLoggedIn = (isLoggedIn) => ({ 
        type: USER_LOGGED_IN,
        payload: isLoggedIn
})
