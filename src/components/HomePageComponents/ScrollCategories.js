import React from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { ScrollCategoriesStyle } from "./HomeStyles/ScrollCategoriesStyle"
import { connect } from 'react-redux'
import myURL from '../../CommonURL/myURL'
import { ActionTakeRestaurantsList } from '../../store/actions/ActionTakeRestaurantsList'


class ScrollCategories extends React.Component {
state = {
    isCategorySelected: ''
};
SelectedCategoryState = (key) => {
    this.setState({
        isCategorySelected: key
    })
}

changeCategory = async() => {
    try {
    const res = await fetch(myURL+'/restaurantsForCategory?idCategory='+this.state.isCategorySelected)
    const resText = await res.json();
    await this.props.setRestList(resText)
    } catch(error) {
    console.log(error);
    }
}

render(){
    return (
        <View style = {ScrollCategoriesStyle.scro}>
            <FlatList
                data = {this.props.RestaurantsCategories}
                horizontal = {true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem = {({item}) => (
                    <TouchableOpacity onPress = {() => {
                        this.SelectedCategoryState(item.idCategoryRestaurant)
                        
                        this.changeCategory()
                    }} >
                        <Text style = {[item.idCategoryRestaurant === this.state.isCategorySelected ? ScrollCategoriesStyle.txte: ScrollCategoriesStyle.txt]} >
                            {item.NameCategoryRestaurant}
                        </Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
    
}}

const mapStateToProps = (store) => { 
    return {
        RestaurantsCategories: store.categoriesList.CategoriesList
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setRestList: (listOfRestaurants) => dispatch(ActionTakeRestaurantsList(listOfRestaurants))
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(ScrollCategories)