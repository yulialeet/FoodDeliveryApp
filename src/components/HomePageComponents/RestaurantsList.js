import React  from 'react';
import {
  Image,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux'
import { Rests } from './DataRestaurants.js';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { RestaurantsListStyle } from './HomeStyles/RestaurantsListStyle'
import store from '../../store/store'
import { useNavigation } from '@react-navigation/native'
import { ActionRestaurantToFoodList } from '../../store/actions/ActionRestaurantToFoodList'


const RestaurantsList = ({ dispatch }) => {
    const navigation = useNavigation();
            return (
                <View style = {RestaurantsListStyle.firview}>
                    <FlatList
                        data = {Rests}
                        renderItem = {({item}) => (
                            <TouchableOpacity style = {RestaurantsListStyle.container} onPress = {() => {
                                dispatch(ActionRestaurantToFoodList(item.name))
                                navigation.navigate('Food')
                            }}> 
                                <View style = {{flex: 3}}>
                                    
                                        <Text style = {RestaurantsListStyle.namerest}>{item.name}</Text>
                                        <View style = {RestaurantsListStyle.ratingcontainer}>
                                            <MaterialCommunityIcons name = 'star' color = {"#FECA57"} borderWidth = {2} borderColor = {'#FFFFFF'}size={20}/> 
                                            <Text style = {{fontFamily: "Montserrat-Light"}}> {item.rating}</Text>
                                        </View>
                                    
                                    <View style = {RestaurantsListStyle.descr}> 
                                        <MaterialCommunityIcons name = 'clock-outline' color = {"#FECA57"} size={20}  style = {{flex:1}}/>
                                        <Text style = {RestaurantsListStyle.worktm}>{item.worktime}</Text>
                                    </View>
                                </View>
                                <Image 
                                    source = {{uri: item.img}}
                                    style = {RestaurantsListStyle.images}
                                />
                            </TouchableOpacity>
                        )}
                    />
                </View>
            )
        
}


export default connect()(RestaurantsList)