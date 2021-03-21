import React, {Component}  from 'react';
import {
  Image,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  Platform,
} from 'react-native';
import { connect } from 'react-redux'
import { Rests } from './DataRestaurants.js';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { RestaurantsListStyle } from './HomeStyles/RestaurantsListStyle'
import store from '../../store/store'
import { useNavigation } from '@react-navigation/native'
import { ActionRestaurantToFoodList } from '../../store/actions/ActionRestaurantToFoodList'
import { ActionTakeRestaurantsList } from '../../store/actions/ActionTakeRestaurtantsList.js';


class RestaurantsList extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            list: ''
        }
        this.getList();
        this.props.setRestList(this.state.list)
    }
    
    
    getList = async() => {
        try {
        const res = await fetch('http://192.168.0.4:8082/restaurantsList')
        const resText = await res.text();
        this.setState({list: 'resText'})
        } catch(error) {
        console.log('err');
        }
  }

   
        
    render(){
        
        console.log(this.props.RestaurantsListFromServer)
    const { navigation } = this.props;
            return (
                <View style = {RestaurantsListStyle.firview}>
                    <FlatList
                        data = {Rests}
                        renderItem = {({item}) => (
                            <TouchableOpacity style = {RestaurantsListStyle.container} onPress = {() => {
                                this.props.toDoIt(item.name)
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
        
}}
const mapStateToProps = (state) => {
    return{
        RestaurantsListFromServer: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        toDoIt: (eventt) => dispatch(ActionRestaurantToFoodList(eventt)),
        setRestList: (listOfRestaurants) => dispatch(ActionTakeRestaurantsList(listOfRestaurants))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsList)