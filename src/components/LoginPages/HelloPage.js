import React from 'react';
import AppNavigator from '../../AppNavigator'
import { connect } from 'react-redux'
import ConfigNavigationHelloPage from './ConfigNavigationHelloPage';
import {ActionTakeRestaurantsList} from '../../store/actions/ActionTakeRestaurantsList'
import myURL from '../../CommonURL/myURL'
import { ActionRestaurantsCategories } from '../../store/actions/ActionRestaurantsCategories';

class Hellopage extends React.Component {

//assyncstorage

constructor(props){
    super(props)
}

async componentDidMount() {
    try {
//    const res = await fetch(myURL+'/restaurantsList?idRestaurant=1')
    const res = await fetch(myURL+'/restaurantsList')
    const resText = await res.json();
    await this.props.setRestList(resText)
    } catch(error) {
    console.log(error);
    }

    try {
            const res = await fetch(myURL+'/restaurantsCategory')
            const resText = await res.json();
            await this.props.setCategoriesRestaurantsList(resText)
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
        setRestList: (listOfRestaurants) => dispatch(ActionTakeRestaurantsList(listOfRestaurants)),
        setCategoriesRestaurantsList: (listOfCategories) => dispatch(ActionRestaurantsCategories(listOfCategories))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Hellopage)
