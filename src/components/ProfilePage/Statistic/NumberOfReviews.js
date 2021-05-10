import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { StyleStatistic } from '../../ManagerComponents/Statistic/StyleStatistic'


class NumberOfReviews extends React.Component {

    render() {
        return (
            <View style = {StyleStatistic.componentsMainView1}>
                <View style = {StyleStatistic.headlineContainer}>
                    <Text style = {StyleStatistic.headline}>Отзывы</Text>
                </View>
                <FlatList
                    data = {this.props.data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem = {({item}) => (
                        <Text>
                            <Text style = {StyleStatistic.defaultText}>В FoodDelivery вы оставили уже </Text>
                            <Text style = {StyleStatistic.selectionText}>{item.NumberOfReviews} </Text>
                            <Text style = {StyleStatistic.defaultText}>отзывов </Text>
                        </Text>
                    )}
                />
            </View>
        )
    }
}

export default NumberOfReviews