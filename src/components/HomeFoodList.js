import React, {useState} from 'react'
import {SafeAreaView, ScrollView, FlatList, Text, ActivityIndicator, View} from 'react-native'
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

  const [isRender, setRender] = useState(false);
  const [isRender2, setRender2] = useState(false);

useEffect(() => {
  async function setLists() {
    try {
      const res = await fetch(myURL+'/dishesList?idRest='+props.TakeIdRestaurant)
      const resText = await res.json();
      setRender(true)
    await props.takeDishes(resText)
    } catch(error) {
      console.log(error);
    }


    try {
      const res = await fetch(myURL+'/dishesCategory?idRest='+props.TakeIdRestaurant)
      const resText = await res.json();
      await props.takeDishesCategories(resText)
      setRender2(true)
      } catch(error) {
      console.log(error);
      }
    }
    setLists()
})



const navigation = useNavigation();
  if (isRender && isRender2) {
    return(
      <SafeAreaView style = {{flex: 1}}>
          <ReviewsAndWorkTime navigation = {navigation}/>
          <FoodCategoriesScroll/>
          <FoodList navigation = {navigation}/>
      </SafeAreaView>
    )
  }
  else {
    return(
      <View style = {{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator 
              size = "large" 
              color="#FECA57"
          />
      </View>
    )
  }
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

