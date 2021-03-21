import React from 'react';
import AppNavigator from './src/AppNavigator.js'
import { Provider } from 'react-redux'
import store from './src/store/store'
import {Alert, Button, Text, View} from 'react-native'
import ConfigNavigationHelloPage from './src/components/LoginPages/ConfigNavigationHelloPage';

export default class App extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //       list: 'll'
    //     }
    //   }
    
    //   // Fetch the list on first mount
    //   componentDidMount() {
    //     this.getList();
    //   }
    
    //   // Retrieves the list of items from the Express app
    //   getList = async() => {
    //     try {
    //       const res = await fetch('http://192.168.0.4:8082/gg')
    //       const resText = await res.text();
    //       this.setState({list: resText})
    //     } catch(error) {
    //       console.log(error.message);
    //       Alert.alert(error.message)
    //     }
    //   }

    render() {
        return(
             <Provider store = {store}>
                 <ConfigNavigationHelloPage/>
             </Provider>

            
        )
    }
}

