import React from 'react'
import {
    Text,
    View,
    FlatList,
    Image
} from 'react-native'
import { connect } from 'react-redux'
import { StyleDishesListBasket } from './StyleDishesListBasket'
import { Buffer } from 'buffer'



class DishesListBasket extends React.Component {


    render(){
        console.log(this.props.cartList.dishesInfo)
        return (
            <View>
                <FlatList
                data = {this.props.cartList.dishesInfo}
                keyExtractor={(item, index) => index.toString()}
                renderItem = {({item}) => (
                    <View style = {StyleDishesListBasket.viewBox}>
                        <View style = {StyleDishesListBasket.viewLeft}>
                            <Text style = {StyleDishesListBasket.dishName}>{item[0].NameDish}</Text>
                            <Text>{item.count}</Text>
                            <Text>{item.count * item[0].PriceDish}</Text>
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
        cartList: state.dishInfoCart
    }
}
export default connect(mapStateToProps, null) (DishesListBasket)