import React from 'react'
import {
    Text,
    View,
    FlatList,
    Image,
    TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import { StyleDishesListBasket } from './StyleDishesListBasket'
import { Buffer } from 'buffer'

class DishesListBasket extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        testState: false
    }


    render(){
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
                                            this.setState({testState: true})
                                            return item.count = item.count-1
                                        }
                                        
                                    }}
                                >
                                    <Text style = {StyleDishesListBasket.buttonsText}>-</Text>
                                </TouchableOpacity>

                                    <Text style = {StyleDishesListBasket.defaultText}>{item.count}</Text>

                                <TouchableOpacity
                                    style = {StyleDishesListBasket.buttonsChange}
                                    onPress = {() => {
                                            this.setState({testState: true})
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
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        cartList: state.dishInfoCart,
        nameOfRestaurant: state.currentIdRest
    }
}
export default connect(mapStateToProps, null) (DishesListBasket)