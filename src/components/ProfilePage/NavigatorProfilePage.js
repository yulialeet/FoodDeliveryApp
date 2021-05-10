import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {connect} from 'react-redux'
import MainProfilePage from './MainProfilePage';
import ContainerUserOrders from './ContainerUserOrders';
import NewDeliveryAddress from './NewDeliveryAddress';
import StatisticContainer from './Statistic/StatisticContainer';

const Stack = createStackNavigator();
class NavigatorProfilePage extends React.Component {
    



    render (){
        return(
            <Stack.Navigator initialRouteName = 'MainProfile'>
                <Stack.Screen 
                    name="MainProfile"
                    component={MainProfilePage}
                    options={{
                      title: 'Профиль',
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
                    name="MyOrders"
                    component={ContainerUserOrders}
                    options={{
                      title: 'Мои заказы',
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
                    name="DeliveryAddress"
                    component={NewDeliveryAddress}
                    options={{
                      title: 'Адрес доставки',
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
                    name="Statistic"
                    component={StatisticContainer}
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
                        marginLeft: -20
                      },
                    }}
                />
            </Stack.Navigator>
        )
    }
}


export default connect()(NavigatorProfilePage)

