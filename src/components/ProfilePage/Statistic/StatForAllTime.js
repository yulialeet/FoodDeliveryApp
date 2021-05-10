import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { StyleStatistic } from '../../ManagerComponents/Statistic/StyleStatistic'


class StatForAllTime extends React.Component {

    render() {
        return (
            <View style = {StyleStatistic.componentsMainView1}>
                <View style = {StyleStatistic.headlineContainer}>
                    <Text style = {StyleStatistic.headline}>А в целом...</Text>
                </View>
                <FlatList
                    data = {this.props.data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem = {({item}) => (
                        <Text>
                            <Text style = {StyleStatistic.defaultText}>Всего вы сделали </Text>
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

export default StatForAllTime