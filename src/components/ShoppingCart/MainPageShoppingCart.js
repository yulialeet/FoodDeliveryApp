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

    componentDidMount() {
        console.log('didd')
    }
      
    async componentDidUpdate(prevProps) {
        console.log(prevProps)
        if (prevProps.cartList !== this.props.cartList) {
            console.log('upfate')
            if (this.props.cartList.length != 0) {
                console.log('if')
                for (let i = 0; i < this.props.cartList.length; i++) {
                    try {
                        const res = await fetch(myURL+'/dishInformation?idDish='+this.props.cartList[i].productid)
                        const resText = await res.json();
                        await this.props.addInListCart(resText, this.props.cartList[i].countDish)
                    } catch(error) {
                        console.log(error);
                    }
                }
                // this.setState ({
                //     isFetch: true
                // })
            } else {
                console.log('emmmmmpty')
            }
        }
    }
          
    ShouldRender = () => {
        if (this.state.isFetch) {
            return <DishesListBasket/>
        } else {
            console.log(this.props.cartList)
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
    //console.log(state);
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