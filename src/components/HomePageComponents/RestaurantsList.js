import React  from 'react';
import {
  Image,
  View,
  Text,
  FlatList,
} from 'react-native';
import {Rests} from './DataRestaurants.js';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {RestaurantsListStyle} from './HomeStyles/RestaurantsListStyle'

function RestaurantsList() {
            return (
                <View style = {RestaurantsListStyle.firview}>
                    <FlatList
                        data = {Rests}
                        renderItem = {({item}) => (
                            <View style = {RestaurantsListStyle.container}> 
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
                            </View>
                        )}
                    />
                </View>
            )
        
}


export default RestaurantsList