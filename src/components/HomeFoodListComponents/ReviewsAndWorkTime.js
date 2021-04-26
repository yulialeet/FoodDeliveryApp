import React from 'react'
import {
    View,
    TouchableOpacity,
    Text,
    Alert
} from 'react-native'
import {ReviewsAndWorkTimeStyle} from './HomeFoodStyles/ReviewsAndWorkTimeStyle'
import { connect } from 'react-redux'
import { ActionInfoAboutRestaurant } from '../../store/actions/ActionInfoAboutRestaurant'

import { ActionReviewsRestaurant } from '../../store/actions/ActionReviewsRestaurant'
import { ActionPressReviews } from '../../store/actions/ActionIsLoading'

class ReviewsAndWorkTime extends React.Component {

    state = {
        isLoad1: false,
        isLoad2: false
    }
    


    render() {
        const { navigation } = this.props;
    return(
        <View>
                <View style = {ReviewsAndWorkTimeStyle.mainContainer}>
                    <TouchableOpacity 
                        style = {ReviewsAndWorkTimeStyle.childContainer}
                        onPress = {() => {
                            this.props.setLoading(true)
                            navigation.navigate('AboutRestaurant')
                        }}
                    >
                        <Text style = {ReviewsAndWorkTimeStyle.textStyle}>О ресторане, отзывы</Text>
                    </TouchableOpacity>
            

                </View>
        </View>
    )
}}

const mapStateToProps = (state) => {
    return{
        TakeIdRestaurant: state.nameRestaurant.nameRestaurant
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setInfoRest: (infoRest) => dispatch(ActionInfoAboutRestaurant(infoRest)),
        setReviewsList: (reviews) => dispatch(ActionReviewsRestaurant(reviews)),
        setLoading: (isLoad) => dispatch(ActionPressReviews(isLoad))
    }
}


  
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsAndWorkTime)