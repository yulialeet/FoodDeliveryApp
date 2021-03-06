import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import {AppNavigatorStyle} from './styles/AppNavigatorStyle.js'
import HomeRestaurantList from './components/HomeRestaurantList'
import HomePageHead from './components/HomePageComponents/HomePageHead'
import HomeScreen from './components/HomeScreen.js';

const Tab = createMaterialBottomTabNavigator();

export default function AppNavigator() {
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
            component = {HomeScreen}
            options = {{
                tabBarLabel: "",
                tabBarIcon: ({color, focused}) => (
                    <MaterialCommunityIcons style = {focused ? AppNavigatorStyle.focus : AppNavigatorStyle.notfocus} name = 'cart-outline' color = {color} size={26} />
                )
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
}