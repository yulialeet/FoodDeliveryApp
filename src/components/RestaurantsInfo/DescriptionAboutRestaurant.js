import React from 'react'
import { Text , View} from 'react-native'
import { connect } from 'react-redux'
import { StyleDescription } from './StyleDescription'

class DescriptionAboutRestaurant extends React.Component {

    

    render() {
        return (
            <View style = {StyleDescription.commonView}>
                <Text style = {StyleDescription.textDefault}>Номер телефона: {this.props.infoRest.map((e) => e.PhoneNumber).toString()}</Text>
                <Text style = {StyleDescription.textDefault}>Максимальное время доставки: {this.props.infoRest.map((e) => e.TimeToDelivery).toString()} минут</Text>
                <Text style = {StyleDescription.textDefault}>{this.props.infoRest.map((e) => e.DescriptionRestaurant).toString()}</Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        infoRest: state.infoAboutRest.infoRestaurant,
    }
}

export default connect(mapStateToProps)(DescriptionAboutRestaurant)