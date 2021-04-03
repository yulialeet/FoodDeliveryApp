import React from 'react'
import {
    View,
    ActivityIndicator,
    Text
} from 'react-native'
import DishesListBasket from './DishesListBasket'
import { connect } from 'react-redux'
import { ActionDishInfoInCart } from '../../store/actions/ActionDishInfoInCart'
import myURL from '../../CommonURL/myURL'


class MainPageShoppingCart extends React.Component {
    
        
    ShouldRender = () => {
    
        if (this.props.isCartEmpty) {
            return (
                <View style = {{flex: 1, justifyContent: 'center'}}>
                    <Text
                        style = {{fontFamily: "Montserrat-Light", textAlign: 'center', fontSize: 23, color: '#ABABAB'}}
                    >Тут пока пусто :(</Text>
                </View>
            )
        } else if (this.props.isLoad) {
            return(
                <View style = {{flex: 1, justifyContent: 'center'}}>
                    <ActivityIndicator 
                        size = "large" 
                        color="#FECA57"
                    />
                </View>
            )
        } else {
            return (
                <DishesListBasket />
            )
        }
    }

    
    

    render(){
        return (
                <this.ShouldRender />
        )
    }
}

const mapStateToProps = (state) => {
    return{
        cartList: state.basketList.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addInListCart: (arrInfo, count) => dispatch(ActionDishInfoInCart(arrInfo, count))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPageShoppingCart)