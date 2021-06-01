import React, {Component}  from 'react';
import {
  Image,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { RestaurantsListStyle } from './HomeStyles/RestaurantsListStyle'
import { ActionRestaurantToFoodList } from '../../store/actions/ActionRestaurantToFoodList'
import { Buffer } from 'buffer'
import { ActionRestaurantNameHeader } from '../../store/actions/ActionRestaurantNameHeader';


class RestaurantsList extends React.Component{

    isRestaurantWork = (workFrom, workTo) => {
        const { navigation } = this.props;
        let currentHour = new Date().getHours()
        let currentMinutes = new Date().getMinutes()
        let workFrom1 = workFrom.slice(0, workFrom.lastIndexOf(':'))
        let workTo1 = workTo.slice(0, workTo.lastIndexOf(':'))
        let workToHours = workTo1.slice(0, 2)
        let workToMinutes = workTo1.slice(3, 5)
        let workFromHours = workFrom1.slice(0, 2)
        let workFromMinutes = workFrom1.slice(3, 5)
            if ((currentHour < workFromHours && currentHour > workToHours) || 
            (currentHour == workToHours && currentMinutes > workToMinutes) ||
            (currentHour == workFromHours && currentMinutes < workFromMinutes)) {
                Alert.alert('Ресторан уже закрылся, выберите другой')
                navigation.navigate('Food')
            }
            else {
                navigation.navigate('Food')
            }
            
    }

    shouldRender = () => {
        if (this.props.isLoading) {
            return (
                <View style = {{flex: 1, justifyContent: 'center'}}>
                    <ActivityIndicator 
                        size = "large" 
                        color="#FECA57"
                    />
                </View>
            )
        } else {
            return (
                <View style = {RestaurantsListStyle.firview}>
                    <FlatList
                        data = {this.props.RestaurantsListFromServer}
                        
                        keyExtractor={(item, index) => index.toString()}
                        renderItem = {({item}) => (
                            <TouchableOpacity style = {RestaurantsListStyle.container} onPress = {() => {
                                this.props.toDoIt(item.idRestaurant);
                                this.props.setNameRestaurant(item.NameRestaurant)
                                this.isRestaurantWork(item.WorkTimeFrom, item.WorkTimeTo)
                            }}> 
                                <View style = {{width: 170}}>
                                        <Text style = {RestaurantsListStyle.namerest}>{item.NameRestaurant}</Text>
                                        
                                    
                                    <View style = {RestaurantsListStyle.descr}> 
                                        <MaterialCommunityIcons name = 'clock-outline' color = {"#FECA57"} size={20}  style = {{flex:1}}/>
                                        <Text style = {RestaurantsListStyle.worktm}>
                                            c {item.WorkTimeFrom.slice(0, item.WorkTimeFrom.lastIndexOf(":"))} 
                                            { } до {item.WorkTimeTo.slice(0, item.WorkTimeTo.lastIndexOf(":"))}
                                        </Text>
                                    </View>
                                </View>
                                <View style = {{flexDirection: 'row'}}>
                                <View style = {RestaurantsListStyle.ratingcontainer}>
                                            <MaterialCommunityIcons name = 'star' color = {"#FECA57"} borderWidth = {2} borderColor = {'#FFFFFF'}size={20}/> 
                                            <Text style = {{fontFamily: "Montserrat-Light"}}> {item.RatingRest}</Text>
                                        </View>
                                <View style = {{justifyContent: 'center'}}>
                                    
                                    <Image 
                                        source = {{uri: "data:image/png;base64,"+Buffer.from(item.LogoRestaurant).toString('base64')}}
                                        style = {RestaurantsListStyle.images}
                                    />
                                </View>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            )
        }
    }
    render(){
        return (
            <this.shouldRender />
        )
    }
}

const mapStateToProps = (state) => {
    return{
        RestaurantsListFromServer: state.listOfRestaurants.RestaurantsListFromServer,
        isLoading: state.isLoading.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        toDoIt: (eventt) => dispatch(ActionRestaurantToFoodList(eventt)),
        setNameRestaurant: (nameRest) => dispatch(ActionRestaurantNameHeader(nameRest))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsList)