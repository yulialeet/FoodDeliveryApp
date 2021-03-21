import { createStore, combineReducers } from 'redux';
import reducerRestaurantsList from './reducers/ReducerRestaurantsList';
import restaurantListToFoodList from './reducers/RestaurantListToFoodList'

//const store = createStore(restaurantListToFoodList);
const store = createStore(
    combineReducers({
        nameRestaurant: restaurantListToFoodList,
        listOfRestaurants: reducerRestaurantsList
    })
)
export default store;
