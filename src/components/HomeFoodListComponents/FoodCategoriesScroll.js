import React  from 'react';
import {
    Text,
    View,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import {FoodCategoriesStyle} from './HomeFoodStyles/FoodCategoriesStyle'
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
            <View style = {FoodCategoriesStyle.styleFlatlist}>
                <FlatList
                    data = {this.props.DishesCategories}
                    horizontal = {true}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem = {({item}) => (
                        <TouchableOpacity onPress = {() => {this.SelectedCategoryState(item.idCategoryDish)}} >
                            <Text style = {[item.idCategoryDish === this.state.isCategorySelected ? FoodCategoriesStyle.selectedComponentStyle: FoodCategoriesStyle.defaultComponentStyle]} >{item.NameCategory}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        )
        
    }}

    const mapStateToProps = (state) => {
        return{
            DishesCategories: state.dishesCategories.DishesCategories
        }
      }

export default connect(mapStateToProps, null)(ScrollCategories)