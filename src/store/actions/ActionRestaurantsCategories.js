export const TAKE_RESTAURANT_CATEGORIES_LIST = 'TAKE_RESTAURANT_CATEGORIES_LIST'

export const ActionRestaurantsCategories = (listOfCategories) => ({
        type: TAKE_RESTAURANT_CATEGORIES_LIST,
        payload: listOfCategories
})