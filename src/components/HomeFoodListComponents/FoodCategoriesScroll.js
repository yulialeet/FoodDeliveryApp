import React  from 'react';
import {
    Text,
    View,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import {CategoriesRests} from '../HomePageComponents/CategoriesRests'
import {FoodCategoriesStyle} from './HomeFoodStyles/FoodCategoriesStyle'


export default class ScrollCategories extends React.Component {
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
                    data = {CategoriesRests}
                    horizontal = {true}
                    showsHorizontalScrollIndicator={false}
                    renderItem = {({item}) => (
                        <TouchableOpacity onPress = {() => {this.SelectedCategoryState(item.key)}} >
                            <Text style = {[item.key === this.state.isCategorySelected ? FoodCategoriesStyle.selectedComponentStyle: FoodCategoriesStyle.defaultComponentStyle]} >{item.NameCat}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        )
        
    }}