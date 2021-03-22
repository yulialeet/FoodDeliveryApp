import { createStore, combineReducers } from 'redux';
import reducerRestaurantsList from './reducers/ReducerRestaurantsList';
import restaurantListToFoodList from './reducers/RestaurantListToFoodList'
import ReducerLoggedIn from './reducers/ReducerLoggedIn'

//const store = createStore(restaurantListToFoodList);
const store = createStore(
    combineReducers({
        nameRestaurant: restaurantListToFoodList,
        listOfRestaurants: reducerRestaurantsList,
        isUserLoggedIn: ReducerLoggedIn
    })
)
export default store;
