import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { StyleStatistic } from './StyleStatistic'


class RegularCustomers extends React.Component {

    render() {
        return (
            <View style = {StyleStatistic.componentsMainView1}>
                <View style = {StyleStatistic.headlineContainer}>
                    <Text style = {StyleStatistic.headline}>Постоянные клиенты</Text>
                </View>
                <FlatList
                    data = {this.props.customers}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem = {({item}) => (
                        <Text style = {{marginBottom: 15}}>
                            <Text style = {StyleStatistic.defaultText}>Клиент </Text>
                            <Text style = {StyleStatistic.selectionText}>{item.FIO} </Text>
                            <Text style = {StyleStatistic.defaultText}>сделал(а) заказ </Text>
                            <Text style = {StyleStatistic.selectionText}>{item.NumberOfOrders} </Text>
                            <Text style = {StyleStatistic.defaultText}>раз на общую сумму </Text>
                            <Text style = {StyleStatistic.selectionText}>{item.TotalPriceOfOrders} </Text>
                            <Text style = {StyleStatistic.defaultText}>руб. Номер телефона: {item.PhoneNumber}</Text>
                        </Text>
                    )}
                />
            </View>
        )
    }
}

export default RegularCustomers