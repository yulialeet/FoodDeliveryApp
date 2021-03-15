import React from 'react';
import {SafeAreaView} from 'react-native';
import HomePageHead from './HomePageComponents/HomePageHead';
import RestaurantsList from './HomePageComponents/RestaurantsList';
import ScrollCategories from './HomePageComponents/ScrollCategories';


//class HomeRestaurantList extends React.Component {
//  render() {
  function HomeRestaurantList() {
    return(
      <SafeAreaView style = {{flex: 1}}>
        <ScrollCategories />
        <RestaurantsList/>
      </SafeAreaView>
    )
  }




export default HomeRestaurantList;
