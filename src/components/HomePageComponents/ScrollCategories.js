import React from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {CategoriesRests} from './CategoriesRests'
import { ScrollCategoriesStyle } from "./HomeStyles/ScrollCategoriesStyle"


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
        <View style = {ScrollCategoriesStyle.scro}>
            <FlatList
                data = {CategoriesRests}
                horizontal = {true}
                showsHorizontalScrollIndicator={false}
                renderItem = {({item}) => (
                    <TouchableOpacity onPress = {() => {this.SelectedCategoryState(item.key)}} >
                        <Text style = {[item.key === this.state.isCategorySelected ? ScrollCategoriesStyle.txte: ScrollCategoriesStyle.txt]} >{item.NameCat}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
    
}}

