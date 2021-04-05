import React from 'react'
import {
    Text,
    View,
    FlatList,
    Image,
    TouchableOpacity,
    Alert,
    ActivityIndicator
} from 'react-native'
import { connect } from 'react-redux'
import { StyleDishesListBasket } from './StyleDishesListBasket'
import { Buffer } from 'buffer'
import { AddProduct, RemoveProduct } from '../../store/actions/ActionAddToShoppingCart'
import { ActionDishInfoInCart, ActionRemoveAllFromCart } from '../../store/actions/ActionDishInfoInCart'

class DishesListBasket extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        isEmpty: false,
        isLoading: false,
        totalPrice: 0,
        isDeliveryFree: false
    }


    componentDidMount() {
        let totPrice = 0
        this.props.cartList.dishesInfo.forEach((item) => {
            totPrice += item.count * item[0].PriceDish;
        })
        //this.isFreeDelivery(totPrice, Number(this.props.deliveryPrices.map((e) => e.FreeDeliveryFrom)))
        console.log(this.state.isDeliveryFree)
        this.isFreeDelivery(totPrice, Number(this.props.deliveryPrices.map((e) => e.FreeDeliveryFrom)))
        if (!this.state.isDeliveryFree) {
            totPrice = totPrice + Number(this.props.deliveryPrices.map((e) => e.DeliveryPrice))
        }
    }
    deleteFromCart = (itemId) => {
        Alert.alert(
            "",
            "Удалить из корзины?",
            [
                {
                    text: "Отмена",
                  //style: "cancel"
                },
                { 
                    text: "Да, удалить", onPress: () => {
                        this.props.removeProd(itemId)
                        this.getThis()
                    }
                }
            ]
        )
    }

    getThis = async() => {
        this.props.removeCart()
        if (this.props.cartListFirst.length != 0) {
            this.setState({isEmpty: false, isLoading: true})
            for (let i = 0; i < this.props.cartListFirst.length; i++) {
                try {
                    const res = await fetch(myURL+'/dishInformation?idDish='+this.props.cartListFirst[i].productid)
                    const resText = await res.json();
                    await this.props.addInListCart(Object.assign({ ...resText, count: this.props.cartListFirst[i].countDish }))
                } catch(error) {
                    console.log(error);
                }
            }
            this.setState({isLoading: false})
        } else {
            this.setState({isLoading: false, isEmpty: true})
        }
    }

    isFreeDelivery = (totalPrice, freeDel) => {
        console.log('work')
        console.log(totalPrice)
        console.log(freeDel)
        if (totalPrice >= freeDel) {
            this.setState({isDeliveryFree: true})
        }
        else {
            this.setState({isDeliveryFree: false})
        }
    }


    ShouldRender = (totalPrice) => {
    
        console.log(totalPrice)
        if (this.state.isEmpty) {
            return (
                <View style = {{flex: 1, justifyContent: 'center'}}>
                    <Text
                        style = {{fontFamily: "Montserrat-Light", textAlign: 'center', fontSize: 23, color: '#ABABAB'}}
                    >Тут пока пусто :(</Text>
                </View>
            )
        } else if (this.state.isLoading) {
            return(
                <View style = {{flex: 1, justifyContent: 'center'}}>
                    <ActivityIndicator 
                        size = "large" 
                        color="#FECA57"
                    />
                </View>
            )
        }  else {
        return (
            <View style = {{flex: 1}}>
                <Text style = {StyleDishesListBasket.nameRestaurant}>{this.props.nameOfRestaurant.currentName}</Text>


                <FlatList
                data = {this.props.cartList.dishesInfo}
                keyExtractor={(item, index) => index.toString()}
                renderItem = {({item}) => (
                    <View style = {StyleDishesListBasket.viewBox}>
                        <View style = {StyleDishesListBasket.viewLeft}>
                            <Text style = {StyleDishesListBasket.dishName}>{item[0].NameDish}</Text>

                            <View style = {StyleDishesListBasket.bottomElemView}>
                                <TouchableOpacity
                                    style = {StyleDishesListBasket.buttonsChange}
                                    onPress = {() => {
                                        if (item.count !== 1) {
                                            this.props.removeProd(item[0].idDish)
                                            this.props.addToCart(item[0].idDish, item.count-1)
                                            this.isFreeDelivery(totalPrice, Number(this.props.deliveryPrices.map((e) => e.FreeDeliveryFrom)))
                                            return item.count = item.count-1
                
                                        }
                                        if (item.count == 1) {
                                            this.deleteFromCart(item[0].idDish)
                                        }
                                        
                                    }}
                                >
                                    <Text style = {StyleDishesListBasket.buttonsText}>-</Text>
                                </TouchableOpacity>

                                    <Text style = {StyleDishesListBasket.defaultText}>{item.count}</Text>

                                <TouchableOpacity
                                    style = {StyleDishesListBasket.buttonsChange}
                                    onPress = {() => {
                                            this.props.removeProd(item[0].idDish)
                                            this.props.addToCart(item[0].idDish, item.count+1)
                                            this.isFreeDelivery(totalPrice, Number(this.props.deliveryPrices.map((e) => e.FreeDeliveryFrom)))
                                            return item.count = item.count+1
                                            
                                    }}
                                >
                                    <Text style = {StyleDishesListBasket.buttonsText}>+</Text>
                                </TouchableOpacity>

                                    <Text style = {StyleDishesListBasket.defaultText}>{item.count * item[0].PriceDish} руб.</Text>
                            </View>
                        </View>
                        <Image
                            source = {{uri: "data:image/png;base64,"+Buffer.from(item[0].PhotoDish).toString('base64')}}
                            style = {StyleDishesListBasket.imgStyle}       
                        />



                    </View>
                )}
                />
            <View style = {StyleDishesListBasket.viewBox}>
                <Text style = {StyleDishesListBasket.deliveryText}>Доставка</Text>
                <Text style = {StyleDishesListBasket.deliveryPrice}>{this.props.deliveryPrices.map((e) => e.DeliveryPrice).toString()} руб. </Text>
            </View>
            <View>
                <Text>ст доставки:{this.props.deliveryPrices.map((e) => e.DeliveryPrice).toString()}</Text>
                <Text>бесп доставка от:{this.props.deliveryPrices.map((e) => e.FreeDeliveryFrom).toString()}</Text>
                <Text>Итого: {totalPrice.totalPrice}</Text>
            </View>



            </View>

            
        )
    }}
    render() {
        
        let totPrice = 0
        this.props.cartList.dishesInfo.forEach((item) => {
            totPrice += item.count * item[0].PriceDish;
        })
        //this.isFreeDelivery(totPrice, Number(this.props.deliveryPrices.map((e) => e.FreeDeliveryFrom)))
        console.log(this.state.isDeliveryFree)
        if (!this.state.isDeliveryFree) {
            totPrice = totPrice + Number(this.props.deliveryPrices.map((e) => e.DeliveryPrice))
        }

        console.log('render')
        return (
            <this.ShouldRender totalPrice = {totPrice}/>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        cartList: state.dishInfoCart,
        nameOfRestaurant: state.currentIdRest,
        cartListFirst: state.basketList.products,
        deliveryPrices: state.currentIdRest.deliveryPrice
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addToCart: (idDishToCart, countDishes) => dispatch(AddProduct(idDishToCart, countDishes)),
        removeProd: (idProduct) => dispatch(RemoveProduct(idProduct)),
        removeCart: () => dispatch(ActionRemoveAllFromCart()),
        addInListCart: (arrInfo) => dispatch(ActionDishInfoInCart(arrInfo))
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (DishesListBasket)