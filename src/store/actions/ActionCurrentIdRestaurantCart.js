export const CURRENT_ID = 'CURRENT_ID'
export const CURRENT_NAMERESTAURANT = 'CURRENT_NAMERESTAURANT'
export const CURRENT_DELIVERYPRICES = 'CURRENT_DELIVERYPRICES'

export const ActionCurrentIdRestaurantCart = (idRest) => ({
        type: CURRENT_ID,
        payload: idRest
})

export const ActionCurrentNameRestaurantCart = (nameRest) => ({
        type: CURRENT_NAMERESTAURANT,
        payload: nameRest
})

export const ActionCurrentRestaurantDeliveryPrice = (deliveryPrices) => ({
    type: CURRENT_DELIVERYPRICES,
    payload: deliveryPrices
})