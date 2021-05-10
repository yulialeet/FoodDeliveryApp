import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { StyleStatistic } from './StyleStatistic'


class AverageCheck extends React.Component {

    render() {
        return (
            <View style = {StyleStatistic.componentsMainView1}>
                <View style = {StyleStatistic.headlineContainer}>
                    <Text style = {StyleStatistic.headline}>Средний чек</Text>
                </View>
                <FlatList
                    data = {this.props.avgCheck}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem = {({item}) => (
                        <Text>
                            <Text style = {StyleStatistic.defaultText}>Средний чек на заказ составляет </Text>
                            <Text style = {StyleStatistic.selectionText}>{item.AverageCheck}  </Text>
                            <Text style = {StyleStatistic.defaultText}>руб. </Text>
                        </Text>
                    )}
                />
            </View>
        )
    }
}

export default AverageCheck