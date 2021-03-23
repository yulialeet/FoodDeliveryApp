import React from 'react';
import AppNavigator from '../../AppNavigator'
import { Provider, connect } from 'react-redux'
import {Alert, Button, SafeAreaView, Text, View} from 'react-native'
import ConfigNavigationHelloPage from './ConfigNavigationHelloPage';
import {ActionTakeRestaurantsList} from '../../store/actions/ActionTakeRestaurantsList'


class Hellopage extends React.Component {

//assyncstorage

constructor(props){
    super(props)
}

async componentDidMount() {
    try {
    const res = await fetch('http://192.168.0.105:8082/restaurantsList')
    const resText = await res.json();
    await this.props.setRestList(resText)
    } catch(error) {
    console.log(error);
    }
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


const mapDispatchToProps = (dispatch) => {
    return{
        setRestList: (listOfRestaurants) => dispatch(ActionTakeRestaurantsList(listOfRestaurants))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Hellopage)
