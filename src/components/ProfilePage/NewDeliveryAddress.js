import React from 'react'
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import { StyleNewDeliveryAddress } from './StyleNewDeliveryAddress'
import {connect} from 'react-redux'
import myURL from '../../CommonURL/myURL'

class NewDeliveryAddress extends React.Component {

    state = {
        currentAddress: '',
        isReadyToRender: false,
        newAddress: '',
        street: '',
        house: '',
        korp: '',
        appart: ''
    }
    getCurrentDeliveryAddress = async() => {
        try {
            console.log('se')
            const res = await fetch(myURL+'/getDeliveryAddress?idClient='+this.props.clientId)
            const resText = await res.json();
            this.setState({currentAddress: resText.map((e) => e.DeliveryAddress).toString(), isReadyToRender: true})
        } catch(error) {
            console.log(error);
        }
    }

    setNewDeliveryAddress = async() => {
        this.setState({isReadyToRender: false})
        try {
            const res = await fetch(myURL+'/updateDeliveryAddress?' + new URLSearchParams({
                deladdress: this.state.newAddress,
                idClient: this.props.clientId
            }))
            
            this.getCurrentDeliveryAddress()
        } catch(error) {
            console.log(error)
        }
    }
    componentDidMount() {
        console.log('1')
        this.getCurrentDeliveryAddress()
        console.log('2')
    }

    shouldRender = () => {
        if (this.state.isReadyToRender) {
            return (
                <View>
                    <View style = {StyleNewDeliveryAddress.CurAddress}>
                        <Text style = {StyleNewDeliveryAddress.defaultText}>Ваш текущий адрес для доставки: {this.state.currentAddress}</Text>
                        <Text style = {StyleNewDeliveryAddress.defaultText}>Вы можете изменить адрес доставки:</Text>
                    </View>
                    <View style = {StyleNewDeliveryAddress.viewForInputs}>
                        <TextInput 
                            style = {StyleNewDeliveryAddress.loginInput}
                            placeholder = 'улица'
                            onChangeText = {(text) => this.setState({street: text})}
                        />
                        
                        <TextInput
                            style = {StyleNewDeliveryAddress.loginInput}
                            placeholder = 'дом'
                            onChangeText = {(text) => this.setState({house: text})}
                        />

                        <TextInput
                            style = {StyleNewDeliveryAddress.loginInput}
                            placeholder = 'корпус'
                            onChangeText = {(text) => this.setState({korp: text})}
                        />

                        <TextInput
                            style = {StyleNewDeliveryAddress.loginInput}
                            placeholder = 'квартира'
                            onChangeText = {(text) => this.setState({appart: text})}
                        />

                        <TouchableOpacity
                            style = {StyleNewDeliveryAddress.changeAddr}
                            onPress = {() => {
                                if (this.state.korp.length == 0 && this.state.appart.length !== 0) {
                                    this.setState({newAddress: 'ул. ' + this.state.street + ', д.' + this.state.house + ', кв. ' + this.state.appart}, this.setNewDeliveryAddress)
                                } else if (this.state.housing.length == 0 && this.state.apart.length == 0) {
                                    this.setState({newAddress: 'ул. ' + this.state.street + ', д.' + this.state.house}, this.setNewDeliveryAddress)
                                } else {
                                    this.setState({newAddress: 'ул. ' + this.state.street + ', д.' + this.state.house + ', корпус ' + this.state.korp + ', кв. ' + this.state.appart}, this.setNewDeliveryAddress)
                                }
                            }}>
                            <Text style = {StyleNewDeliveryAddress.butText}>Изменить адрес</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        } else {
            return(
                <View style = {{flex: 1, justifyContent: 'center'}}>
                    <ActivityIndicator 
                        size = "large" 
                        color="#FECA57"
                    />
                </View>
            )
        }
    }
    render() {
        return(
            <this.shouldRender />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        clientId: state.userRole.clientId
    }
}

export default connect(mapStateToProps)(NewDeliveryAddress)