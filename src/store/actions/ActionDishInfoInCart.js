export const DISH_INFO_SHOPPING_CART = 'DISH_INFO_SHOPPING_CART'
export const REMOVE_ALL_CART = 'REMOVE_ALL_CART'

export const ActionDishInfoInCart = (listOfDishes) => ({
        type: DISH_INFO_SHOPPING_CART,
        payload: listOfDishes
})

export const ActionRemoveAllFromCart = () => ({
        type: REMOVE_ALL_CART
})