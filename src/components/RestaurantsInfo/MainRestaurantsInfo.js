import React from 'react'
import { Text, View } from 'react-native'
import DescriptionAboutRestaurant from './DescriptionAboutRestaurant'
import ReviewsRestaurant from './ReviewsRestaurant'


class MainRestaurantsInfo extends React.Component {

    render() {
        return (
            <View>
                <DescriptionAboutRestaurant/>
                <ReviewsRestaurant/>
            </View>
        )
    }
}

export default MainRestaurantsInfo