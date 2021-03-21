import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeRestaurantList from './HomeRestaurantList';
import HomeFoodList from './HomeFoodList';
import store from '../store/store'
import { connect } from 'react-redux';


const Stack = createStackNavigator();

class HomeScreen extends React.Component {
    constructor(props) {
        super(props)
    }
    
    
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
                        title: this.props.nameRestaurant,
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
        )
}}

const mapStateToProps = (state) => {
    return{
        nameRestaurant: state.nameRestaurant.nameRestaurant
    }
}

export default connect(mapStateToProps, null)(HomeScreen)