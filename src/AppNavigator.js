import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import {AppNavigatorStyle} from './styles/AppNavigatorStyle.js'
import HomeScreen from './components/HomeScreen.js';
import MainPageShoppingCart from './components/ShoppingCart/MainPageShoppingCart'
import LoginPage from './components/LoginPages/LoginPage.js';
import { Alert } from 'react-native';
import { connect } from 'react-redux'
import myURL from './CommonURL/myURL'
import { ActionDishInfoInCart, ActionRemoveAllFromCart } from './store/actions/ActionDishInfoInCart.js';
import ContainerShopCart from './components/ShoppingCart/ContainerShopCart.js';


const Tab = createMaterialBottomTabNavigator();

//export default function AppNavigator() {
class AppNavigator extends React.Component {

getThis = async() => {
    this.props.removeCart()
    if (this.props.cartList.length != 0) {
        for (let i = 0; i < this.props.cartList.length; i++) {
            try {
                const res = await fetch(myURL+'/dishInformation?idDish='+this.props.cartList[i].productid)
                const resText = await res.json();
                await this.props.addInListCart(Object.assign({ ...resText, count: this.props.cartList[i].countDish }))
            } catch(error) {
                console.log(error);
            }
        }
    } else {
        console.log('emmmmmpty')
    }
}
    render(){
  return (
      <NavigationContainer>
      <Tab.Navigator barStyle={{ backgroundColor: '#FFFFFF' }}  activeColor = "#31B9CC" inactiveColor = "#9C9C9C">
      
        <Tab.Screen 
            name = "Home" 
            component = {HomeScreen}
            options = {{
                tabBarLabel: "",
                tabBarIcon: ({color, focused}) => (
                    <MaterialCommunityIcons style = {focused ? AppNavigatorStyle.focus : AppNavigatorStyle.notfocus} name = 'silverware-fork-knife' color = {color} size={26} />
                )
            }}
        />
        <Tab.Screen 
            name = "ShopBasket" 
            component = {ContainerShopCart}
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
            component = {HomeScreen}
            options = {{
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
        cartList: state.basketList.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeCart: () => dispatch(ActionRemoveAllFromCart()),
        addInListCart: (arrInfo) => dispatch(ActionDishInfoInCart(arrInfo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator)