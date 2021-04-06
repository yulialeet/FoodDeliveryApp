import React from 'react'
import { Text, View } from 'react-native'
import {connect} from 'react-redux'
class ReviewsRestaurant extends React.Component {

    render() {
        return (
            <View>
                <View>
                    <Text>Отзывы</Text>
                </View>
            </View>
        )
    }
}

export default connect()(ReviewsRestaurant)

