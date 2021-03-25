import React from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { ScrollCategoriesStyle } from "./HomeStyles/ScrollCategoriesStyle"
import { connect } from 'react-redux'

class ScrollCategories extends React.Component {
state = {
    isCategorySelected: 1
};
SelectedCategoryState = (key) => {
    this.setState(({
        isCategorySelected: key
    }))
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
                    <TouchableOpacity onPress = {() => {this.SelectedCategoryState(item.idCategoryRestaurant)}} >
                        <Text style = {[item.idCategoryRestaurant === this.state.isCategorySelected ? ScrollCategoriesStyle.txte: ScrollCategoriesStyle.txt]} >{item.NameCategoryRestaurant}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
    
}}

const mapStateToProps = (store) => { 
    return{
        RestaurantsCategories: store.categoriesList.CategoriesList
    }
}
export default connect(mapStateToProps, null)(ScrollCategories)