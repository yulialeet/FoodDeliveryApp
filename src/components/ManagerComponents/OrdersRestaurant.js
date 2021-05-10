import React from 'react'
import { View, Text, FlatList } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import { connect } from 'react-redux';
import { StyleUserOrders }  from '../ProfilePage/StyleUserOrders'
import myURL from '../../CommonURL/myURL'
import { StyleOrdersRestaurant } from './StyleOrdersRestaurant';

class OrdersRestaurant extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          test: true // Make it explicit there's no value at the beginning.
        };
      }

    
    updateOrderStatus = async(idOrder, newStatus) => {
        try {
            const res = await fetch(myURL+'/updateOrderStatus?' + new URLSearchParams({
                orderStatus: newStatus,
                idOrder: idOrder
            }))
        } catch(error) {
            console.log(error);
        }
    }

    fun = () => {
        this.setState({test: !this.state.test})
    }
    componentDidUpdate() {
        console.log('upd')
    }
    setColorForStatus = (stat) => {
        if (stat == "Выполнен") {
            return {color: 'green', fontFamily: 'Montserrat-Medium', fontSize: 16}
        } else if (stat == 'Обрабатывается'){
            return {color: '#31B9CC', fontFamily: 'Montserrat-Medium', fontSize: 16}
        } else if (stat == 'Готовится'){
            return {color: 'orange', fontFamily: 'Montserrat-Medium', fontSize: 16}
        } else if (stat == 'Курьер выехал'){
            return {color: '#FECA57', fontFamily: 'Montserrat-Medium', fontSize: 16}
        }
    }
    render() {
        return(
            <View>
                <FlatList
                    data = {this.props.ordersList}
                    extraData = {this.state.test}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem = {({item}) => (
                        <View style = {StyleUserOrders.elementsView}>
                            <View>
                                <Text style = {StyleUserOrders.defaultText}>Статус заказа: </Text>
                                <DropDownPicker 
                                    items = {[
                                        {label: 'Обрабатывается', value: 'Обрабатывается', 
                                        textStyle: {color: '#31B9CC', fontFamily: 'Montserrat-Medium', fontSize: 16 }},
                                        {label: 'Готовится', value: 'Готовится', textStyle: {color: 'orange', fontFamily: 'Montserrat-Medium', fontSize: 16}},
                                        {label: 'Курьер выехал', value: 'Курьер выехал', textStyle: {color: '#FECA57', fontFamily: 'Montserrat-Medium', fontSize: 16}},
                                        {label: 'Выполнен', value: 'Выполнен', textStyle: {color: 'green', fontFamily: 'Montserrat-Medium', fontSize: 16}}
                                    ]}
                                    defaultValue = {item.OrderStatus}
                                    globalTextStyle = {this.setColorForStatus(item.OrderStatus)}
                                    itemStyle = {{borderWidth: 1, borderBottomWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, borderColor: '#C1C1C1'}}
                                    dropDownMaxHeight = {200}
                                    onChangeItem={(stat) => {
                                        this.updateOrderStatus(item.idOrder, stat.value)
                                        this.fun()
                                    }}
                                    dropDownStyle = {{padding: 0}}
                                />

                                <Text style = {StyleUserOrders.defaultText}>Заказ №{item.idOrder}</Text>
                                <Text style = {StyleUserOrders.defaultText}>Клиент: {item.ClientName}</Text>
                                <Text style = {StyleUserOrders.defaultText}>Номер телефона: {item.PhoneNumber}</Text>
                                <Text style = {StyleUserOrders.defaultText}>Адрес доставки: {item.deliveryAddress}</Text>
                                <Text style = {StyleUserOrders.defaultText}>Время заказа: {item.OrderTime.split('-').join('.').split('T').join(' в ').slice(0, 18)}</Text>
                            </View>
                            <View>
                                <Text style = {StyleUserOrders.defaultText}>Содержание заказа: </Text>

                                <View style = {StyleOrdersRestaurant.viewDishes}>
                                    <Text style = {StyleUserOrders.defaultText}>Наименование</Text>
                                    <Text style = {StyleUserOrders.defaultText}>Количество</Text>
                                </View>
                                    <FlatList
                                        data = {item.data}
                                        keyExtractor={(item, index) => index.toString()}
                                        renderItem = {({item}) => (
                                            <View>
                                                <View style = {StyleOrdersRestaurant.viewDishes}>
                                                    <Text style = {StyleOrdersRestaurant.defaultText}>{item.NameDish}</Text>
                                                    <Text style = {StyleOrdersRestaurant.defaultText}>{item.AmountDishes}</Text>
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