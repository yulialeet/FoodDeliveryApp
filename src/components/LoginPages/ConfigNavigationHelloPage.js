import React, { Component } from 'react';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import ClassToCallLoginPage from './ClassToCallLoginPage';
import RegistrationPage from './RegistrationPage';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import AppNavigator from '../../AppNavigator';
import ContainerRegistration from './ContainerRegistration';
import RequestForRestaurants from './RequestForRestaurants';


const Stack = createStackNavigator();

ConfigNavigationHelloPage = () => {
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
                    component = {ContainerRegistration}
                    options={
                        {headerShown: false}
                    }
                />
                <Stack.Screen 
                    name = 'Request' 
                    component = {RequestForRestaurants}
                    options={
                        {headerShown: false}
                    }
                />
                
            </Stack.Navigator>
            </NavigationContainer>
        )
}


export default ConfigNavigationHelloPage