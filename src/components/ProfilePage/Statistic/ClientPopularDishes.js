import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { StyleStatistic } from '../../ManagerComponents/Statistic/StyleStatistic'


class ClientPopularDishes extends React.Component {

    render() {
        return (
            <View style = {StyleStatistic.componentsMainView1}>
                <View style = {StyleStatistic.headlineContainer}>
                    <Text style = {StyleStatistic.headline}>Самые популярные блюда</Text>
                </View>
                <FlatList
                    data = {this.props.data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem = {({item}) => (
                        <Text>
                            <Text style = {StyleStatistic.defaultText}>Блюдо </Text>
                            <Text style = {StyleStatistic.selectionText}>"{item.NameDish}" </Text>
                            <Text style = {StyleStatistic.defaultText}>вы купили </Text>
                            <Text style = {StyleStatistic.selectionText}>{item.total} </Text>
                            <Text style = {StyleStatistic.defaultText}>раз!</Text>
                        </Text>
                    )}
                />
            </View>
        )
    }
}

export default ClientPopularDishes