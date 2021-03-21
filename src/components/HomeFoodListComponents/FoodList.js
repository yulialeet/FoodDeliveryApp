import React  from 'react';
import {
    Image,
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Alert,
} from 'react-native';
import { connect } from 'react-redux'
import { Rests } from '../HomePageComponents/DataRestaurants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { FoodListStyle } from './HomeFoodStyles/FoodListStyle'
//import store from '../../store/store'
import { useNavigation } from '@react-navigation/native'
//import { ActionRestaurantToFoodList } from '../../store/actions/ActionRestaurantToFoodList'

const FoodList = () => {
    return (
        <View style = {FoodListStyle.mainView}>
            <FlatList
                data = {Rests}
                renderItem = {({item}) => (
                    <TouchableOpacity style = {FoodListStyle.mainContainer}>

                            <View>
                                <Text style = {FoodListStyle.nameOfRestaurant}>{item.name}</Text>
                                <View style = {FoodListStyle.buttonAndPriceView}>
                                    <TouchableOpacity style = {FoodListStyle.buttonAdd}>
                                        <Text style = {FoodListStyle.textAdd}>Добавить</Text>
                                    </TouchableOpacity>
                                    <Text style = {FoodListStyle.priceOfFood}>{item.delprice} р.</Text>
                                </View>
                            </View>

                            <View>
                                <Image
                                    source = {{uri: item.img}}
                                    style = {FoodListStyle.pictureFood}
                                />
                            </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}


export default FoodList