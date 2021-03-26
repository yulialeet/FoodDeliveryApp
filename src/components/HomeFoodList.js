import React from 'react'
import {SafeAreaView, ScrollView, FlatList, Text} from 'react-native'
import ReviewsAndWorkTime from './HomeFoodListComponents/ReviewsAndWorkTime'
import FoodCategoriesScroll from './HomeFoodListComponents/FoodCategoriesScroll'
import FoodList from './HomeFoodListComponents/FoodList'
import { connect } from 'react-redux'
import { ActionTakeDishesList } from '../store/actions/ActionTakeDishesList'
import myURL from '../CommonURL/myURL'
import { ActionDishesCategories } from '../store/actions/ActionDishesCategories'
import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/core'


HomeFoodList = (props) => {


useEffect(() => {
  async function setLists() {
    try {
      const res = await fetch(myURL+'/dishesList?idRest='+props.TakeIdRestaurant)
      const resText = await res.json();
    await props.takeDishes(resText)
    } catch(error) {
      console.log(error);
    }


    try {
      const res = await fetch(myURL+'/dishesCategory?idRest='+props.TakeIdRestaurant)
      const resText = await res.json();
      await props.takeDishesCategories(resText)
      } catch(error) {
      console.log(error);
      }
    }
    setLists()
})
const navigation = useNavigation();
    return(
      <SafeAreaView style = {{flex: 1}}>
          <ReviewsAndWorkTime/>
          <FoodCategoriesScroll/>
          <FoodList navigation = {navigation}/>
      </SafeAreaView>
    )
}


const mapStateToProps = (state) => {
  return{
      TakeIdRestaurant: state.nameRestaurant.nameRestaurant
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
      takeDishes: (listDish) => dispatch(ActionTakeDishesList(listDish)),
      takeDishesCategories: (listDishesCategories) => dispatch(ActionDishesCategories(listDishesCategories))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeFoodList)

