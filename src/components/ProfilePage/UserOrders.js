import React from 'react'
import { FlatList, Modal, Text, TouchableOpacity, View } from 'react-native'
import { StyleUserOrders } from './StyleUserOrders'


class UserOrders extends React.Component {

    setStatusOrder = (statOrd) => {
        if (statOrd == 'Обрабатывается') {
            return (<Text style = {{fontFamily: 'Montserrat-Medium', fontSize: 16, color: '#31B9CC'}}>Обрабатывается</Text>)
        } else if (statOrd == 'Готовится'){
            return (<Text style = {{fontFamily: 'Montserrat-Medium', fontSize: 16, color: 'orange'}}>Готовится</Text>)
        } else if (statOrd == 'Курьер выехал'){
            return (<Text style = {{fontFamily: 'Montserrat-Medium', fontSize: 16, color: '#FECA57'}}>Курьер выехал</Text>)
        } else if (statOrd == 'Выполнен'){
            return (<Text style = {{fontFamily: 'Montserrat-Medium', fontSize: 16, color: 'green'}}>Выполнен</Text>)
        } else {
            return (<Text>{statOrd}</Text>)
        }
    }
    
    render() {
        return(
            <View>
                <FlatList
                    data = {this.props.ordersList}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem = {({item}) => (
                        <View style = {StyleUserOrders.elementsView}>
                            <View>
                                <Text style = {StyleUserOrders.defaultText}>Статус заказа: {this.setStatusOrder(item.OrderStatus)}</Text>
                                <Text style = {StyleUserOrders.defaultText}>Заказ №{item.idOrder}</Text>
                                <Text style = {StyleUserOrders.defaultText}>Ресторан: {item.NameRestaurant}</Text>
                                <Text style = {StyleUserOrders.defaultText}>Время заказа: {item.OrderTime.split('-').join('.').split('T').join(' в ').slice(0, 18)}</Text>
                            </View>
                            <View>
                                <Text style = {StyleUserOrders.defaultText}>Содержание заказа: </Text>
                                <View style = {StyleUserOrders.viewDishes}>
                                    <Text style = {StyleUserOrders.defaultText}>Наименование</Text>
                                    <Text style = {StyleUserOrders.defaultText}>Количество</Text>
                                </View>
                                    <FlatList
                                        data = {item.data}
                                        keyExtractor={(item, index) => index.toString()}
                                        renderItem = {({item}) => (
                                            <View>
                                                <View style = {StyleUserOrders.viewDishes}>
                                                    <Text style = {StyleUserOrders.defaultText}>{item.NameDish}</Text>
                                                    <Text style = {StyleUserOrders.defaultText}>{item.AmountDishes}</Text>
                                                </View>
                                            </View>
                                        )}
                                    />
                            </View>

                            <View style = {{marginTop: 15}}>
                                <Text style = {StyleUserOrders.defaultText}>Сумма заказа: {item.TotalPrice} руб.</Text>
                            </View>
                            <View>
                                <Text style = {StyleUserOrders.defaultText}>Описание к заказу: {item.DescriptionToOrder}</Text>
                            </View>
                        </View>
                    )}
                />
            </View>
        )
    }
}

export default UserOrders