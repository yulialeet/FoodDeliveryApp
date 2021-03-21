import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import {SafeAreaView} from 'react-native';
import RestaurantsList from './HomePageComponents/RestaurantsList';
import ScrollCategories from './HomePageComponents/ScrollCategories';

export default HomeRestaurantList = (props) => {
    const navigation = useNavigation();
    
    return (
        <SafeAreaView style = {{flex: 1}}>
            <ScrollCategories />
            <RestaurantsList navigation = {navigation}/>
       </SafeAreaView>
    )
}

// getList = async() => {
//     try {
//     const res = await fetch('http://192.168.0.4:8082/restaurantsList')
//     const resText = await res.text();
//     // this.setState({list: resText})
//     listOfRestaurants = resText
//     } catch(error) {
//     console.log('err');
//     }
// }



