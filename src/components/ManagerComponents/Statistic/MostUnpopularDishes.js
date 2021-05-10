import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { StyleStatistic } from './StyleStatistic'

class MostUnpopularDishes extends React.Component {

    render() {
        return (
            <View style = {StyleStatistic.componentsMainView2}>
                <View style = {StyleStatistic.headlineContainer}>
                    <Text style = {StyleStatistic.headline}>Самые непопулярные блюда</Text>
                </View>
                <FlatList
                    data = {this.props.unpopularDishes}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem = {({item}) => (
                        <Text>
                            <Text style = {StyleStatistic.defaultText}>Блюдо </Text>
                            <Text style = {StyleStatistic.selectionText}>"{item.NameDish}" </Text>
                            <Text style = {StyleStatistic.defaultText}>купили </Text>
                            <Text style = {StyleStatistic.selectionText}>{item.total} </Text>
                            <Text style = {StyleStatistic.defaultText}>раз</Text>
                        </Text>
                    )}
                />
            </View>
        )
    }
}

export default MostUnpopularDishes