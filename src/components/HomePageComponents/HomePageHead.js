import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../HomePage';

const Stack = createStackNavigator()

export  default function HomePageHead() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePage}
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
      </Stack.Navigator>
    );
}

