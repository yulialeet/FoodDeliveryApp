import React from 'react';
import { 
        FlatList, 
        SafeAreaView, 
        Text, 
        Image, 
        View, 
        TouchableOpacity,
        Alert
     } from 'react-native';
import { connect } from 'react-redux'
import { Buffer } from 'buffer'
import {StyleFoodOwnPage} from './StyleFoodOwnPage'
import { AddProduct, RemoveAllProducts } from '../../store/actions/ActionAddToShoppingCart';
import { ActionCurrentIdRestaurantCart } from '../../store/actions/ActionCurrentIdRestaurantCart';


class FoodOwnPage extends React.Component {

    state = {
        priceDish: 'd',
        countDish: 1,
        endPrice: 111
    }

    initialPrice = (initPrice) => {
        this.setState({
            priceDish: initPrice,
            endPrice: initPrice
        })
    }

    componentDidMount() {
        this.initialPrice(this.Price)
    }
    Price = 100

    minusCounter = () => {
        if (this.state.countDish != 1) {
            this.setState({
                countDish: this.state.countDish - 1
            }, this.totalPrice)
        }
    }

    totalPrice = () => {
        this.setState ({
            endPrice: this.state.countDish*this.state.priceDish
        })
    }
    plusCounter = () => {
        this.setState({
            countDish: this.state.countDish + 1
        }, this.totalPrice)
    }

    checkIsRestaurantAlreadyInCart = (idRest, idDish, quant) => {
        
        if (idRest == this.props.currentCartRest) {
            this.props.addToCart(idDish, quant)
            Alert.alert('Успешно добавлено в Вашу корзину!')
        } else if (this.props.currentCartRest == undefined){
            this.props.currentRestaurant(idRest)
            this.props.addToCart(idDish, quant)
            Alert.alert('Успешно добавлено в Вашу корзину!')
        } else {
            Alert.alert(
                "Внимание",
                "В вашей корзине уже есть товары из другого ресторана, очистить корзину?",
                [
                    {
                        text: "Нет",
                      //style: "cancel"
                    },

                    { 
                        text: "Да, очистить", onPress: () => {
                            this.props.currentRestaurant(undefined)
                            this.props.removeCart()
                        }
                    }
                ]
            )
        }
    }

    render() {
        return(
            <SafeAreaView>
                <FlatList
                    data = {this.props.dishInfo}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem = {({item}) => (
                        <View>
                            <Image
                                source = {{uri: "data:image/png;base64,"+Buffer.from(item.PhotoDish).toString('base64')}}
                                style = {StyleFoodOwnPage.pictureFood}
                            />
                            <Text style = {StyleFoodOwnPage.nameDish}>{item.NameDish}</Text>
                            <Text style = {StyleFoodOwnPage.descriptionFood}>{item.DescriptionDish}</Text>
                                <Text style = {StyleFoodOwnPage.hiddenTxt}>{this.Price = item.PriceDish}</Text>
                           
                            <View style = {StyleFoodOwnPage.BottomView}>
                                <TouchableOpacity 
                                    style = {StyleFoodOwnPage.buttonsChange} 
                                    onPress = {() => {
                                        this.minusCounter()
                                    }}
                                >
                                    <Text style = {StyleFoodOwnPage.buttonsText}> - </Text>
                                </TouchableOpacity>

                                <Text style = {StyleFoodOwnPage.bottomText}>{this.state.countDish}</Text>

                                <TouchableOpacity 
                                    style = {StyleFoodOwnPage.buttonsChange}
                                    onPress = {() => {
                                        this.plusCounter()
                                    }}
                                >
                                    <Text style = {StyleFoodOwnPage.buttonsText}> + </Text>
                                </TouchableOpacity>

                                <Text style = {StyleFoodOwnPage.bottomText}>{this.state.endPrice} { } руб.</Text>

                                <TouchableOpacity 
                                    style = {StyleFoodOwnPage.buttonAdd}
                                    onPress = {() => {
                                        this.checkIsRestaurantAlreadyInCart(item.RestaurantidRestaurant, item.idDish, this.state.countDish)
                                    }}
                                > 
                                    <Text style = {StyleFoodOwnPage.bottomText}>Добавить</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                    
                
                />
            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        dishInfo: state.dishInfo.dishInfo,
        currentCartRest: state.currentIdRest.currentId
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addToCart: (idDishToCart, countDishes) => dispatch(AddProduct(idDishToCart, countDishes)),
        currentRestaurant: (idRest) => dispatch(ActionCurrentIdRestaurantCart(idRest)),
        removeCart: () => dispatch(RemoveAllProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodOwnPage)