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




