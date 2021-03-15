
const restaurantListToFoodList = (state, action) => {
    if (typeof state === 'undefined') {
        return 0
    }
    if (action.type === 'ClickOnRestaurant') {
        return {
            key: action.key,
        }
    }
    //return action.key
}
export default restaurantListToFoodList