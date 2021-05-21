import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { StyleStatistic } from './StyleStatistic'

class StatisticForToday extends React.Component {

    render() {
        console.log(this.props.data)
        return (
            <View style = {StyleStatistic.componentsMainView1}>
                <View style = {StyleStatistic.headlineContainer}>
                    <Text style = {StyleStatistic.headline}>Заказы на сегодня</Text>
                </View>
                <FlatList
                    data = {this.props.data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem = {({item}) => (
                        <Text>
                            <Text style = {StyleStatistic.defaultText}>За сегодня у вас было </Text>
                            <Text style = {StyleStatistic.selectionText}>{item.NumberOfOrders} </Text>
                            <Text style = {StyleStatistic.defaultText}>заказов на общую сумму </Text>
                            <Text style = {StyleStatistic.selectionText}>{item.TotalSum} </Text>
                        </Text>
                    )}
                />
            </View>
        )
    }
}

export default StatisticForToday