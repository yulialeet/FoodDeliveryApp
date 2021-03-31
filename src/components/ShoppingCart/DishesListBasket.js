import React from 'react'
import {
    Text,
    View
} from 'react-native'
import { connect } from 'react-redux'


class DishesListBasket extends React.Component {


    render(){
        console.log('down')
        console.log(this.props.cartList)
        return (
            <View>
                <Text>Hi</Text>
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