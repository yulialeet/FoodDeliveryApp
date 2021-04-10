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
import { Rating, AirbnbRating } from 'react-native-ratings';

class ReviewsRestaurant extends React.Component {


    isReviewsEmpty = () => {
        if (this.props.reviewsList.length == 0) {
            return (
                <View style = {{flex: 1, justifyContent: 'center', marginTop: 50}}>
                    <Text style = {StyleReviews.emptyBox}>Отзывов пока нет, станьте первым!</Text>
                </View>
            )
        } else {
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
                                        <Rating
                                            imageSize={18}
                                            readonly = {true}
                                            startingValue = {item.RateOfRestaurant}
                                        />
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
    render() {
        return (
            <this.isReviewsEmpty />
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

