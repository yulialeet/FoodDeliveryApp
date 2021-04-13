import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {connect} from 'react-redux'
import OrdersRestaurant from './OrdersRestaurant';
import MainPage from './MainPage';
import { NavigationContainer } from '@react-navigation/native';
import MainPageContainer from './MainPageContainer';


const Stack = createStackNavigator();


MainContainer = () => {
    



        return(
            <NavigationContainer>
            <Stack.Navigator initialRouteName = 'StartPage'>
                <Stack.Screen 
                    name="Orders"
                    component={OrdersRestaurant}
                    options={{
                      title: 'Заказы',
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
                    name="Statist"
                    component={OrdersRestaurant}
                    options={{
                      title: 'Статистика',
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
                    name="StartPage"
                    component={MainPageContainer}
                    options={{
                      title: 'Главная',
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
            </NavigationContainer>
        )
    
}


export default connect()(MainContainer)
