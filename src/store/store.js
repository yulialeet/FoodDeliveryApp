import { createStore, combineReducers } from 'redux';
import reducerRestaurantsList from './reducers/ReducerRestaurantsList';
import restaurantListToFoodList from './reducers/RestaurantListToFoodList'
import ReducerLoggedIn from './reducers/ReducerLoggedIn'
import ReducerTakeDishesList from './reducers/ReducerTakeDishesList'
import ReducerRestaurantsCategories from './reducers/ReducerRestaurantsCategories'
import ReducerDishesCategories from './reducers/ReducerDishesCategories';
import ReducerRestaurantNameHeder from './reducers/ReducerRestaurantNameHeader';
import ReducerIdChosenFood from './reducers/ReducerIdChosenFood';
import ReducerDishInformation from './reducers/ReducerDishInformation'
import ReducerAddToShoppingCart from './reducers/ReducerAddToShoppingCart'
import ReducerCurrentIdRestaurantCart from './reducers/ReducerCurrentIdRestaurantCart';


//const store = createStore(restaurantListToFoodList);
const store = createStore(
    combineReducers({
        nameRestaurant: restaurantListToFoodList,
        listOfRestaurants: reducerRestaurantsList,
        isUserLoggedIn: ReducerLoggedIn,
        dishesList: ReducerTakeDishesList,
        categoriesList: ReducerRestaurantsCategories,
        dishesCategories: ReducerDishesCategories,
        headerRestaurantName: ReducerRestaurantNameHeder,
        idDish: ReducerIdChosenFood,
        dishInfo: ReducerDishInformation,
        basketList: ReducerAddToShoppingCart,
        currentIdRest: ReducerCurrentIdRestaurantCart
    })
)
export default store;
