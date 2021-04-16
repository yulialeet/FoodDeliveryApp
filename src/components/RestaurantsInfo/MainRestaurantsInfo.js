import React from 'react'
import { Text, View, ScrollView, LogBox } from 'react-native'
import AddReview from './AddReview';
import DescriptionAboutRestaurant from './DescriptionAboutRestaurant'
import ReviewsRestaurant from './ReviewsRestaurant'


class MainRestaurantsInfo extends React.Component {


    componentDidMount() {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }
    render() {
        
        return (
            <ScrollView style = {{flex: 1}}>
                <DescriptionAboutRestaurant/>
                <AddReview/>
                <ReviewsRestaurant/>
            </ScrollView>
        )
    }
}

export default MainRestaurantsInfo