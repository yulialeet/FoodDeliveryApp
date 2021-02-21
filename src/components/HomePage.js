import React from 'react';
import {SafeAreaView} from 'react-native';
import RestaurantsList from './HomePageComponents/RestaurantsList';
import ScrollCategories from './HomePageComponents/ScrollCategories';


class HomePage extends React.Component {
  render() {
    return(
      <SafeAreaView style = {{flex: 1}}>
        <ScrollCategories />
        <RestaurantsList />
      </SafeAreaView>
    )
  }
}



export default HomePage;
