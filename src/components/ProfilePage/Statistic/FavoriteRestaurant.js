import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { StyleStatistic } from '../../ManagerComponents/Statistic/StyleStatistic'


class FavoriteRestaurant extends React.Component {

    render() {
        return (
            <View style = {StyleStatistic.componentsMainView2}>
                <View style = {StyleStatistic.headlineContainer}>
                    <Text style = {StyleStatistic.headline}>Любимый ресторан</Text>
                </View>
                <FlatList
                    data = {this.props.data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem = {({item}) => (
                        <View>
                            <Text>
                                <Text style = {StyleStatistic.defaultText}>Чаще всего вы заказываете в ресторане </Text>
                                <Text style = {StyleStatistic.selectionText}>{item.NameRestaurant} </Text>
                            </Text>
                            <Text>
                                <Text style = {StyleStatistic.defaultText}>В нем вы сделали </Text>
                                <Text style = {StyleStatistic.selectionText}>{item.NumberOfOrders} </Text>
                                <Text style = {StyleStatistic.defaultText}>заказов на общую сумму </Text>
                                <Text style = {StyleStatistic.selectionText}>{item.TotalSum} </Text>
                                <Text style = {StyleStatistic.defaultText}>руб.</Text>
                            </Text>
                        </View>
                    )}
                />
            </View>
        )
    }
}

export default FavoriteRestaurant