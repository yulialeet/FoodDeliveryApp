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
    state = {
        isFetch: true
    }

          
    ShouldRender = () => {
        if (this.state.isFetch) {
            return <DishesListBasket/>
        } else {
            console.log(this.props.cartList.dishesInfo)
            return (
                <View style = {{flex: 1, justifyContent: 'center'}}>
                    <ActivityIndicator 
                        size = "large" 
                        color="#FECA57"
                    />
                </View>
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