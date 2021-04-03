import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainPageShoppingCart from './MainPageShoppingCart';
import { Alert } from 'react-native';


const Stack = createStackNavigator();

export default class ContainerShopCart extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render (){
        return(
            <Stack.Navigator initialRouteName = 'ShopCart'>
                <Stack.Screen 
                    name="ShopCart"
                    children = {() => <MainPageShoppingCart isCartEmpty = {this.props.isCartEmpty} isLoad = {this.props.isLoad}/>}
                    options={{
                      title: 'Корзина',
                      headerStyle: {
                        backgroundColor: '#ffffff',
                        elevation: 10,
                      },
                      headerTintColor: '#31B9CC',
                      headerTitleStyle: {
                        fontFamily: "Montserrat-Medium",
                        fontSize: 26,
                        elevation: 2,
                        alignSelf: 'center',
                        marginBottom: -10,
                      },
                    }}
                />
                </Stack.Navigator>
        )
}}