import React from 'react'
import { 
    Text, 
    View,
    FlatList,
    TouchableOpacity 
} from 'react-native'
import {connect} from 'react-redux'
import { StyleReviews } from './StyleReviews'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

class ReviewsRestaurant extends React.Component {

    render() {
        console.log(this.props.reviewsList)
        return (
            <View>
                <View style = {StyleReviews.headerReviews}>
                    <Text style = {StyleReviews.headerText}>Отзывы</Text>
                </View>
                <View>
                    <FlatList
                    data = {this.props.reviewsList}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem = {({item}) => (
                        <View style = {StyleReviews.viewList}>
                            <View style = {StyleReviews.nameAndRating}>
                                <Text style = {StyleReviews.nameRateText}>{item.FIO}</Text>
                                <View style = {StyleReviews.rateNum}>
                                    <Text style = {StyleReviews.nameRateText}>{item.RateOfRestaurant} </Text>
                                    <MaterialCommunityIcons name = 'star' color = {"#FECA57"} borderWidth = {2} borderColor = {'#FFFFFF'}size={18}/>
                                </View>
                            </View>
                            <View style = {StyleReviews.descriptionView}>
                                <Text style = {StyleReviews.descriptionText}>{item.DescriptionReview}</Text>
                            </View>
                        </View>
                    )}
                    />
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        restaurantId: state.nameRestaurant.nameRestaurant,
        userId: state.userRole.UserId,
        reviewsList: state.reviewsList.reviews
    }
}
export default connect(mapStateToProps)(ReviewsRestaurant)

