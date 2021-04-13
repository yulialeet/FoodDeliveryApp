import React from 'react'
import { View, Text, FlatList } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import { connect } from 'react-redux';
import { StyleUserOrders }  from '../ProfilePage/StyleUserOrders'
import myURL from '../../CommonURL/myURL'

class OrdersRestaurant extends React.Component {

    updateOrderStatus = async(idOrder, newStatus) => {
        try {
            const res = await fetch(myURL+'/updateOrderStatus?' + new URLSearchParams({
                orderStatus: newStatus,
                idOrder: idOrder
            }))
            // const resText = await res.json();
            // Alert.alert('Отзыв успешно отправлен!')
            // this.setState({textReview: ''})
        } catch(error) {
            console.log(error);
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
                                <Text style = {StyleUserOrders.defaultText}>Статус заказа: </Text>
                                <DropDownPicker 
                                    items = {[
                                        {label: 'Обрабатывается', value: 'Обрабатывается', 
                                        textStyle: {color: '#31B9CC', fontFamily: 'Montserrat-Medium', fontSize: 16}},
                                        {label: 'Готовится', value: 'Готовится', textStyle: {color: 'orange', fontFamily: 'Montserrat-Medium', fontSize: 16}},
                                        {label: 'Курьер выехал', value: 'Курьер выехал', textStyle: {color: '#FECA57', fontFamily: 'Montserrat-Medium', fontSize: 16}},
                                        {label: 'Выполнен', value: 'Выполнен', textStyle: {color: 'green', fontFamily: 'Montserrat-Medium', fontSize: 16}}
                                    ]}
                                    defaultValue = {item.OrderStatus}
                                    onChangeItem={stat => this.updateOrderStatus(item.idOrder, stat.value)
                                    }
                                />

                                <Text style = {StyleUserOrders.defaultText}>Заказ №{item.idOrder}</Text>
                                <Text style = {StyleUserOrders.defaultText}>Клиент: {item.ClientName}</Text>
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
                                <Text style = {StyleUserOrders.defaultText}>Комментарий к заказу: {item.DescriptionToOrder}</Text>
                            </View>
                        </View>
                    )}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        infoManager: state.infoManager.infoManager
    }
}
export default connect(mapStateToProps)(OrdersRestaurant)