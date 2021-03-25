import React from 'react'
import {SafeAreaView, ScrollView, FlatList, Text} from 'react-native'
import ReviewsAndWorkTime from './HomeFoodListComponents/ReviewsAndWorkTime'
import FoodCategoriesScroll from './HomeFoodListComponents/FoodCategoriesScroll'
import FoodList from './HomeFoodListComponents/FoodList'
import { connect } from 'react-redux'
import { ActionTakeDishesList } from '../store/actions/ActionTakeDishesList'
import myURL from '../CommonURL/myURL'
import { ActionDishesCategories } from '../store/actions/ActionDishesCategories'


class HomeFoodList extends React.Component {


async componentDidMount() {
    try {
    const res = await fetch(myURL+'/dishesList?idRest='+this.props.TakeIdRestaurant)
    const resText = await res.json();
    await this.props.takeDishes(resText)
    } catch(error) {
    console.log(error);
    }


    try {
      const res = await fetch(myURL+'/dishesCategory?idRest='+this.props.TakeIdRestaurant)
      const resText = await res.json();
      await this.props.takeDishesCategories(resText)
      } catch(error) {
      console.log(error);
      }
}

  render(){
    return(
      <SafeAreaView style = {{flex: 1}}>
          <ReviewsAndWorkTime/>
          <FoodCategoriesScroll/>
          <FoodList/>
      </SafeAreaView>
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

