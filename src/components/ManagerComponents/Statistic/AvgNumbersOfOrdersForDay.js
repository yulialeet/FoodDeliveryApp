import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { StyleStatistic } from './StyleStatistic'

class AvgNumbersOfOrdersForDay extends React.Component {

    render() {
        return (
            <View style = {StyleStatistic.componentsMainView2}>
                <View style = {StyleStatistic.headlineContainer}>
                    <Text style = {StyleStatistic.headline}>Среднее количество заказов</Text>
                </View>
                <FlatList
                    data = {this.props.data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem = {({item}) => (
                        <Text>
                            <Text style = {StyleStatistic.defaultText}>В среднем, ресторан получает с агрегатора </Text>
                            <Text style = {StyleStatistic.selectionText}>{item.AverageNumberOfOrders} </Text>
                            <Text style = {StyleStatistic.defaultText}>заказа в день </Text>
                        </Text>
                    )}
                />
            </View>
        )
    }
}

export default AvgNumbersOfOrdersForDay