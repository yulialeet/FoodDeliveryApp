import React from 'react'
import {
    View,
    Text
} from 'react-native'
import DishesListBasket from './DishesListBasket'
import { connect } from 'react-redux'

class MainPageShoppingCart extends React.Component {
    state = {
        isFetch: true
    }

    // async componentDidMount() {
    //     try {
    //         const res = await fetch(myURL+'/dishInformation?idDish='+this.props.idDish)
    //         const resText = await res.json();
    //         await this.props.setDishInfo(resText)
    //         this.setState ({
    //             isFetch: true
    //         })
    //     } catch(error) {
    //         console.log(error);
    //     }
    // }
          
    ShouldRender = () => {
        if (this.state.isFetch) {
            return <DishesListBasket/>
        } else {
            return <Text></Text>
        }
    }

    
    

    render(){
        console.log(this.props.cartList[0].productid)
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

export default connect(mapStateToProps, null)(MainPageShoppingCart)