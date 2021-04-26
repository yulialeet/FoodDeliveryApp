import React from 'react'
import { Text, View, ScrollView, LogBox, ActivityIndicator } from 'react-native'
import AddReview from './AddReview';
import DescriptionAboutRestaurant from './DescriptionAboutRestaurant'
import ReviewsRestaurant from './ReviewsRestaurant'
import  myURL  from '../../CommonURL/myURL'
import { connect } from 'react-redux'
import { ActionInfoAboutRestaurant } from '../../store/actions/ActionInfoAboutRestaurant'
import { ActionReviewsRestaurant } from '../../store/actions/ActionReviewsRestaurant'
import { ActionPressReviews } from '../../store/actions/ActionIsLoading'


class MainRestaurantsInfo extends React.Component {

    showInfo = async() => {
        try {
            const res = await fetch(myURL+'/infoAboutRestaurant?idRest='+this.props.TakeIdRestaurant)
            const resText = await res.json();
            await this.props.setInfoRest(resText)
            this.reviewsRestaurants()
        } catch(error) {
            console.log(error);
        }
    }

    reviewsRestaurants = async() => {
        
        try {
            const res = await fetch(myURL+'/reviewsList?idRest='+this.props.TakeIdRestaurant)
            const resText = await res.json();
            await this.props.setReviewsList(resText.reverse())
            this.props.setLoading(false)
        } catch(error) {
            console.log(error);
        }
        
    }

    componentDidMount() {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
        this.showInfo()
    }
    

    shouldRender = () => {
        if(this.props.isLoad) {
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
                <ScrollView style = {{flex: 1}}>
                    <DescriptionAboutRestaurant/>
                    <AddReview/>
                    <ReviewsRestaurant/>
                </ScrollView>
            )
        }
    }
    render() {
        return (
            <this.shouldRender />
        )
        
    }
}

const mapStateToProps = (state) => {
    return{
        TakeIdRestaurant: state.nameRestaurant.nameRestaurant,
        isLoad: state.isLoading.isLoadingR
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setInfoRest: (infoRest) => dispatch(ActionInfoAboutRestaurant(infoRest)),
        setReviewsList: (reviews) => dispatch(ActionReviewsRestaurant(reviews)),
        setLoading: (isLoad) => dispatch(ActionPressReviews(isLoad))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainRestaurantsInfo)
