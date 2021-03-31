export const DISH_INFO_SHOPPING_CART = 'DISH_INFO_SHOPPING_CART'

export const ActionDishInfoInCart = (listOfDishes, countDish) => ({
        type: DISH_INFO_SHOPPING_CART,
        payload: {listOfDishes, countDish}
})