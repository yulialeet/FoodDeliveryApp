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
import ReducerDishInfoInCart from './reducers/ReducerDishInfoInCart';
import ReducerUserRole from './reducers/ReducerUserRole';
import ReducerInfoAboutRestaurant from './reducers/ReducerInfoAboutRestaurant';
import ReducerReviewsRestaurant from './reducers/ReducerReviewsRestaurant';
import ReducerManagerInfo from './reducers/ReducerManagerInfo';


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
        currentIdRest: ReducerCurrentIdRestaurantCart,
        dishInfoCart: ReducerDishInfoInCart,
        userRole: ReducerUserRole,
        infoAboutRest: ReducerInfoAboutRestaurant,
        reviewsList: ReducerReviewsRestaurant,
        infoManager: ReducerManagerInfo
    })
)
export default store;
