import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeRestaurantList from './HomeRestaurantList';
import HomeFoodList from './HomeFoodList';
import store from '../store/store'
import { connect } from 'react-redux';

const Stack = createStackNavigator();

class HomeScreen extends React.Component {
    
    render (){
        return(
            <Stack.Navigator initialRouteName = 'Restaurants'>
                <Stack.Screen 
                    name="Restaurants"
                    component={HomeRestaurantList}
                    options={{
                      title: 'Рестораны',
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
                <Stack.Screen 
                    name = 'Food' 
                    component = {HomeFoodList} 
                    options={{
                        title: store.getState().key,
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
                          marginLeft: -50,
                        },
                      }}
                />
            </Stack.Navigator>
        //</NavigationContainer>
        )
}}
export default HomeScreen;