import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { StyleStatistic } from './StyleStatistic'

class ReviewsAndRaiting extends React.Component {

    render() {
        return (
            <View style = {StyleStatistic.componentsMainView2}>
                <View style = {StyleStatistic.headlineContainer}>
                    <Text style = {StyleStatistic.headline}>Отзывы и рейтинг</Text>
                </View>
                <FlatList
                    data = {this.props.data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem = {({item}) => (
                        <View>
                            <Text>
                                <Text style = {StyleStatistic.defaultText}>Количество отзывов ресторана -  </Text>
                                <Text style = {StyleStatistic.selectionText}>{item.NumberOfReviews} </Text>
                            </Text>
                            <Text>
                                <Text style = {StyleStatistic.defaultText}>Общий рейтинг ресторана - </Text>
                                <Text style = {StyleStatistic.selectionText}>{item.RatingRest} </Text>
                            </Text>
                        </View>
                    )}
                />
            </View>
        )
    }
}

export default ReviewsAndRaiting