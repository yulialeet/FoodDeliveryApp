import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { StyleStatistic } from '../../ManagerComponents/Statistic/StyleStatistic'


class AvgCheck extends React.Component {

    render() {
        return (
            <View style = {StyleStatistic.componentsMainView2}>
                <View style = {StyleStatistic.headlineContainer}>
                    <Text style = {StyleStatistic.headline}>Средний чек</Text>
                </View>
                <FlatList
                    data = {this.props.data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem = {({item}) => (
                        <Text>
                            <Text style = {StyleStatistic.defaultText}>В среднем вы тратите </Text>
                            <Text style = {StyleStatistic.selectionText}>{item.AverageCheck} </Text>
                            <Text style = {StyleStatistic.defaultText}>руб за заказ </Text>
                        </Text>
                    )}
                />
            </View>
        )
    }
}

export default AvgCheck