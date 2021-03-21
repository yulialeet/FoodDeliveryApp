import React, { Component } from 'react';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import ClassToCallLoginPage from './ClassToCallLoginPage';
import RegistrationPage from './RegistrationPage';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from '../../AppNavigator';


const Stack = createStackNavigator();

class ConfigNavigationHelloPage extends React.Component {
    
    
    render (){
        return(
            <NavigationContainer>
            <Stack.Navigator initialRouteName = 'Login'>
                
                <Stack.Screen 
                    name="Login"
                    component={ClassToCallLoginPage}
                    options={
                        {headerShown: false}
                    }
                />
                <Stack.Screen 
                    name = 'Registration' 
                    component = {RegistrationPage} 
                    options={
                        {headerShown: false}
                    }
                />
                <Stack.Screen 
                    name = 'EndLogin' 
                    component = {AppNavigator} 
                    options={
                        {headerShown: false,
                            swipeEnabled: false,}
                    }
                />
            </Stack.Navigator>
            </NavigationContainer>
        )
}}


export default ConfigNavigationHelloPage