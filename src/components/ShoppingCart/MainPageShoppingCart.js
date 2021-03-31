import React from 'react'
import {
    View,
    ActivityIndicator,
    Text
} from 'react-native'
import DishesListBasket from './DishesListBasket'
import { connect } from 'react-redux'
import { ActionDishInfoInCart } from '../../store/actions/ActionDishInfoInCart'

class MainPageShoppingCart extends React.Component {
    state = {
        isFetch: true
    }

    async componentDidMount() {
        if (this.props.cartList.length != 0) {
            for (let i = 1; i < this.props.cartList.length-1; i++) {
                try {
                    const res = await fetch(myURL+'/dishInformation?idDish='+this.props.cartList[i].productid)
                    const resText = await res.json();
                    await this.props.addInListCart(resText, this.props.cartList[i].countDish)
                    this.setState ({
                        isFetch: true
                    })
                } catch(error) {
                    console.log(error);
                }
            }
        } else {
            console.log('emmmmmpty')
        }
    }
        
          
    ShouldRender = () => {
        if (this.state.isFetch) {
            return <DishesListBasket/>
        } else {
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