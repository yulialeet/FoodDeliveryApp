import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {connect} from 'react-redux'
import OrdersRestaurant from './OrdersRestaurant';
import MainPage from './MainPage';
import { NavigationContainer } from '@react-navigation/native';
import MainPageContainer from './MainPageContainer';
import ContainerOrdersRestaurant from './ContainerOrdersRestaurant';
import ContainerComponent from './DishesEdit/ContainerComponent';
import AddDish from './DishesEdit/AddDish';
import DeleteDishes from './DishesEdit/DeleteDishes';
import MainPageStatistic from './Statistic/MainPageStatistic';


const Stack = createStackNavigator();


MainContainer = () => {
    



        return(
            <NavigationContainer>
            <Stack.Navigator initialRouteName = 'StartPage'>
                <Stack.Screen 
                    name="Orders"
                    component={ContainerOrdersRestaurant}
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
                        marginLeft: -50,
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
                        marginLeft: -50,
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

                <Stack.Screen 
                    name="EditMenu"
                    component={ContainerComponent}
                    options={{
                      title: 'Меню',
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

                <Stack.Screen 
                    name="AddDish"
                    component={AddDish}
                    options={{
                      title: 'Добавить блюдо',
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
                
                <Stack.Screen 
                    name="DeleteDish"
                    component={DeleteDishes}
                    options={{
                      title: 'Удалить блюда',
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
                <Stack.Screen 
                    name="Statistic"
                    component={MainPageStatistic}
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
                        marginLeft: -50,
                      },
                    }}
                /> 
            </Stack.Navigator>
            </NavigationContainer>
        )
    
}


export default connect()(MainContainer)
