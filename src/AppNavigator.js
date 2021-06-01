import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import {AppNavigatorStyle} from './styles/AppNavigatorStyle.js'
import {ActionTakeRestaurantsList} from './store/actions/ActionTakeRestaurantsList'
import { connect } from 'react-redux'
import myURL from './CommonURL/myURL'
import { ActionDishInfoInCart, ActionRemoveAllFromCart } from './store/actions/ActionDishInfoInCart.js';
import ContainerShopCart from './components/ShoppingCart/ContainerShopCart.js';
import { ActionCurrentRestaurantDeliveryPrice } from './store/actions/ActionCurrentIdRestaurantCart.js';
import NavigatorProfilePage from './components/ProfilePage/NavigatorProfilePage.js';
import HomeScreen from './components/HomeScreen.js';
import {ActionIsLoading} from './store/actions/ActionIsLoading'


const Tab = createMaterialBottomTabNavigator();

//export default function AppNavigator() {
class AppNavigator extends React.Component {


    state = {
        isEmpty: false,
        isLoading: true
    }
getThis = async() => {
    this.props.removeCart()
    if (this.props.cartList.length != 0) {
        this.setState({isEmpty: false, isLoading: true})
        for (let i = 0; i < this.props.cartList.length; i++) {
            try {
                const res = await fetch(myURL+'/dishInformation?idDish='+this.props.cartList[i].productid)
                const resText = await res.json();
                await this.props.addInListCart(Object.assign({ ...resText, count: this.props.cartList[i].countDish }))
            } catch(error) {
                console.log(error);
            }
        }
        const deliveryPrices = await fetch(myURL+'/deliveryPrices?idRest='+this.props.currentIdRestaurant)
        const result = await deliveryPrices.json();
        await this.props.addDeliveryPrices(result)
        this.setState({isLoading: false})
    } else {
        this.setState({isLoading: false, isEmpty: true})
    }
}

    updateRests = async() => {
        try {
            this.props.setLoading(true)
            const res = await fetch(myURL+'/restaurantsList')
            const resText = await res.json();
            await this.props.setRestList(resText)
            this.props.setLoading(false)
        } catch(error) {
            console.log(error);
        }
    }


    render(){
  return (
      <NavigationContainer>
      <Tab.Navigator barStyle={{ backgroundColor: '#FFFFFF' }}  activeColor = "#31B9CC" inactiveColor = "#9C9C9C">
      
        <Tab.Screen 
            name = "Home" 
            //component = {HomeScreen}
            children = {() => <HomeScreen/>}
            options = {{
                tabBarLabel: "",
                tabBarIcon: ({color, focused}) => (
                    <MaterialCommunityIcons style = {focused ? AppNavigatorStyle.focus : AppNavigatorStyle.notfocus} name = 'silverware-fork-knife' color = {color} size={26} />
                )
            }}
            listeners={{
                tabPress: e => {
                    this.updateRests()
                },
              }}
        />
        <Tab.Screen 
            name = "ShopBasket" 
            //component = {ContainerShopCart}
            children = {() => <ContainerShopCart isCartEmpty = {this.state.isEmpty} isLoad = {this.state.isLoading}/>}
            options = {{
                title: 'Корзина',
                tabBarLabel: "",
                tabBarIcon: ({color, focused}) => (
                    <MaterialCommunityIcons style = {focused ? AppNavigatorStyle.focus : AppNavigatorStyle.notfocus} name = 'cart-outline' color = {color} size={26} />
                )
            }}
            listeners={{
                tabPress: e => {
                    this.getThis()
                },
              }}
        />
        <Tab.Screen 
            name = 'Profile' 
            component = {NavigatorProfilePage}
            options = {{
                title: 'Профиль',
                tabBarLabel: "",
                tabBarIcon: ({color, focused}) => (
                    <MaterialCommunityIcons style = {focused ? AppNavigatorStyle.focus : AppNavigatorStyle.notfocus} name = 'account-outline' color = {color} size={26} />
                )
            }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}}

const mapStateToProps = (state) => {
    return{
        cartList: state.basketList.products,
        currentIdRestaurant: state.currentIdRest.currentId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeCart: () => dispatch(ActionRemoveAllFromCart()),
        addInListCart: (arrInfo) => dispatch(ActionDishInfoInCart(arrInfo)),
        addDeliveryPrices: (delPrice) => dispatch(ActionCurrentRestaurantDeliveryPrice(delPrice)),
        setLoading: (isLoad) => dispatch(ActionIsLoading(isLoad)),
        setRestList: (listOfRestaurants) => dispatch(ActionTakeRestaurantsList(listOfRestaurants)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator)