import React from 'react'
import {
    Text,
    View
} from 'react-native'
import { connect } from 'react-redux'


class DishesListBasket extends React.Component {


    render(){
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