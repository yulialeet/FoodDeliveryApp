import { createStore } from 'redux';
import restaurantListToFoodList from './reducers/RestaurantListToFoodList'

const store = createStore(restaurantListToFoodList);

export default store;
