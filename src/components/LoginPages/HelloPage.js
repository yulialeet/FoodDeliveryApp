import React from 'react';
import AppNavigator from '../../AppNavigator'
import { Provider, connect } from 'react-redux'
import {Alert, Button, SafeAreaView, Text, View} from 'react-native'
import ConfigNavigationHelloPage from './ConfigNavigationHelloPage';


class Hellopage extends React.Component {

//assyncstorage

constructor(props){
    super(props)
}


Greeting = () => {
    if (this.props.isUserLoggedIn){
        return <AppNavigator />
    } else {
        return <ConfigNavigationHelloPage/>
    }
}


    render() {
       
        return(
                 <this.Greeting/>
        )
        
    }
    
}


const mapStateToProps = (store) => { 
    return{
        isUserLoggedIn: store.isUserLoggedIn.isUserLoggedIn
    }
}

export default connect(mapStateToProps, null)(Hellopage)
