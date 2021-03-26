import React, {Component}  from 'react';
import {
  Image,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { RestaurantsListStyle } from './HomeStyles/RestaurantsListStyle'
import { ActionRestaurantToFoodList } from '../../store/actions/ActionRestaurantToFoodList'
import { Buffer } from 'buffer'
import { ActionRestaurantNameHeader } from '../../store/actions/ActionRestaurantNameHeader';


class RestaurantsList extends React.Component{

    render(){
    const { navigation } = this.props;
            return (
                <View style = {RestaurantsListStyle.firview}>
                    <FlatList
                        data = {this.props.RestaurantsListFromServer}
                        
                        keyExtractor={(item, index) => index.toString()}
                        renderItem = {({item}) => (
                            <TouchableOpacity style = {RestaurantsListStyle.container} onPress = {() => {
                                this.props.toDoIt(item.idRestaurant);
                                this.props.setNameRestaurant(item.NameRestaurant)
                                navigation.navigate('Food')
                            }}> 
                                <View style = {{flex: 3}}>
                                        <Text style = {RestaurantsListStyle.namerest}>{item.NameRestaurant}</Text>
                                        <View style = {RestaurantsListStyle.ratingcontainer}>
                                            <MaterialCommunityIcons name = 'star' color = {"#FECA57"} borderWidth = {2} borderColor = {'#FFFFFF'}size={20}/> 
                                            <Text style = {{fontFamily: "Montserrat-Light"}}> {item.RatingRest}</Text>
                                        </View>
                                    
                                    <View style = {RestaurantsListStyle.descr}> 
                                        <MaterialCommunityIcons name = 'clock-outline' color = {"#FECA57"} size={20}  style = {{flex:1}}/>
                                        <Text style = {RestaurantsListStyle.worktm}>
                                            c {item.WorkTimeFrom.slice(0, item.WorkTimeFrom.lastIndexOf(":"))} 
                                            { } до {item.WorkTimeTo.slice(0, item.WorkTimeTo.lastIndexOf(":"))}
                                        </Text>
                                    </View>
                                </View>
                                <Image 
                                    source = {{uri: "data:image/png;base64,"+Buffer.from(item.LogoRestaurant).toString('base64')}}
                                    style = {RestaurantsListStyle.images}
                                />
                            </TouchableOpacity>
                        )}
                    />
                </View>
            )
        
}}

const mapStateToProps = (state) => {
    return{
        RestaurantsListFromServer: state.listOfRestaurants.RestaurantsListFromServer
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        toDoIt: (eventt) => dispatch(ActionRestaurantToFoodList(eventt)),
        setNameRestaurant: (nameRest) => dispatch(ActionRestaurantNameHeader(nameRest))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsList)