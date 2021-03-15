import React from 'react'
import {SafeAreaView, ScrollView, FlatList, Text} from 'react-native'
import ReviewsAndWorkTime from './HomeFoodListComponents/ReviewsAndWorkTime'
import FoodCategoriesScroll from './HomeFoodListComponents/FoodCategoriesScroll'
import FoodList from './HomeFoodListComponents/FoodList'

function HomeFoodList({navigation}) {
    return(
      <SafeAreaView style = {{flex: 1}}>
          <ReviewsAndWorkTime/>
          <FoodCategoriesScroll/>
          <FoodList/>
      </SafeAreaView>
    )
  }



export default HomeFoodList;
