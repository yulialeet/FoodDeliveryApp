export const SET_NAME_FOR_RESTAURANT = 'SET_NAME_FOR_RESTAURANT'

export const ActionRestaurantToFoodList = (nameRestaurant) => ({ 
        type: SET_NAME_FOR_RESTAURANT,
        payload: nameRestaurant
})
