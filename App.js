import React from 'react';
import AppNavigator from './src/AppNavigator.js'
import { Provider } from 'react-redux'
import store from './src/store/store'

export default class App extends React.Component {
    render() {
        return(
            <Provider store = {store}>
            <AppNavigator />
            </Provider>
        )
    }
}