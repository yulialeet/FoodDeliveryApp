import React from 'react'
import {
    Image,
    View,
    Text,
    TouchableOpacity,
    Alert,
    TextInput, 
    ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import {RegistrationPageStyle} from './RegistrationPageStyle'
import myURL from '../../CommonURL/myURL'

export default class RegistrationPage extends React.Component {
    state = {
        nameuser: '',
        phoneNumber: '',
        password: '',
        street: '',
        home: '',
        housing: '',
        apart: '',
        alladdress: '',
        load: false
    }

    registrateUser = async() => {
        const { navigation } = this.props;
        this.setState({load: true})
        try {
            const isreg = await fetch(myURL+'/checkisuserregistered?login='+this.state.phoneNumber)
            const isregistered = await isreg.json()
            if (isregistered.length == 0) {
                try {
                    const res = await fetch(myURL+'/registrationUser?' + new URLSearchParams({
                        login: this.state.phoneNumber,
                        password: this.state.password
                    }))
                    const resText = await res.json();
                    try {
                        const resk = await fetch(myURL+'/registrationClient?' + new URLSearchParams({
                            nameclient: this.state.nameuser,
                            phonenumber: this.state.phoneNumber,
                            address: this.state.alladdress,
                            iduser: resText.insertId
                        }))
                        const resTextk = await resk.json()
                        navigation.navigate('Login')
                        this.setState({load: false})
                        return Alert.alert('Успешно! Войдите в аккаунт')
                    } catch {
                        console.log(error)
                    }
                } catch {
                    console.log(error)
                }
            } else {
                this.setState({load: false})
                return Alert.alert('Такой пользователь уже зарегистрирован')
            }
        } catch {
            console.log(error)
        }
    }

    isLoad = () => {
        if (this.state.load) {
            return(
                <View style = {{flex: 1, justifyContent: 'center'}}>
                    <ActivityIndicator 
                        size = "large" 
                        color="#FECA57"
                    />
                </View>
            )
        } else {
            return(
                <View style = {RegistrationPageStyle.defaultView}>
                    <View style = {RegistrationPageStyle.viewForInputs}>
                        <TextInput 
                            style = {RegistrationPageStyle.loginInput}
                            placeholder = "Ваше имя"
                            onChangeText = {(text) => this.setState({nameuser: text})}
                        />
                        <TextInput 
                            style = {RegistrationPageStyle.loginInput}
                            placeholder = "Номер телефона"
                            onChangeText = {(text) => this.setState({phoneNumber: text})}
                        />
    
                        <TextInput 
                            style = {RegistrationPageStyle.loginInput}
                            placeholder = "Пароль"
                            secureTextEntry={true}
                            onChangeText = {(text) => this.setState({password: text})}
                        />
    
                        <Text style = {RegistrationPageStyle.textsOptions}>Адрес доставки (г. Сыктывкар):</Text>
    
                        <TextInput 
                            style = {RegistrationPageStyle.loginInput}
                            placeholder = "Улица"
                            onChangeText = {(text) => this.setState({street: text})}
                        />
                        <View style = {RegistrationPageStyle.addressView}>
                            <TextInput 
                                placeholder = "Дом"
                                style = {RegistrationPageStyle.addressInputs}
                                onChangeText = {(text) => this.setState({home: text})}
                            />
                            <TextInput 
                                placeholder = "Корпус"
                                style = {RegistrationPageStyle.addressInputs}
                                onChangeText = {(text) => this.setState({housing: text})}
                            />
                            <TextInput 
                                placeholder = "Квартира"
                                style = {RegistrationPageStyle.addressInputs}
                                onChangeText = {(text) => this.setState({apart: text})}
                            />
                        </View>
                        <TouchableOpacity 
                            style = {RegistrationPageStyle.buttonOpacity}
                            onPress = {() => {
                                if (this.state.nameuser.length < 2) {
                                    Alert.alert('Слишком короткое имя!')
                                } else if (this.state.phoneNumber.length != 11) {
                                    Alert.alert('Проверьте ваш номер телефона')
                                } else if (this.state.street.length < 4 || this.state.home.length == 0) {
                                    Alert.alert('Проверьте адрес')
                                } else if (this.state.password.length < 6) {
                                    Alert.alert('Пароль не может быть коротким')
                                } else {
                                    if (this.state.housing.length == 0 && this.state.apart.length !== 0) {
                                        this.setState({alladdress: 'ул. ' + this.state.street + ', д.' + this.state.home + ', кв. ' + this.state.apart}, this.registrateUser)
                                    } else if (this.state.housing.length == 0 && this.state.apart.length == 0) {
                                        this.setState({alladdress: 'ул. ' + this.state.street + ', д.' + this.state.home}, this.registrateUser)
                                    } else {
                                        this.setState({alladdress: 'ул. ' + this.state.street + ', д.' + this.state.home + ', корпус ' + this.state.housing + ', кв. ' + this.state.apart}, this.registrateUser)
                                    }
                                    
                                }
                            }}
                            
                        >
                            <Text style = {RegistrationPageStyle.textSignIn}>Регистрация</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
    }
    render(){
        return (
            <this.isLoad />
        )
    }
}