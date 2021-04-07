export const USER_ROLE = 'USER_ROLE'
export const USER_ID = 'USER_ID'
export const CLIENT_ID = 'CLIENT_ID'

export const ActionUserRole = (userrole) => ({
        type: USER_ROLE,
        payload: userrole
})


export const ActionUserId = (userId) => ({
        type: USER_ID,
        payload: userId
})

export const ActionClientId = (clientId) => ({
        type: CLIENT_ID,
        payload: clientId
})