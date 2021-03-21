import React from 'react'
import {
    Image,
    View,
    Text,
    TouchableOpacity,
    Alert,
    TextInput
  } from 'react-native';
  import {RegistrationPageStyle} from './RegistrationPageStyle'


export default class RegistrationPage extends React.Component {

    render(){

        return(
            <View style = {RegistrationPageStyle.defaultView}>
                <View style = {RegistrationPageStyle.viewForInputs}>
                    <TextInput 
                        style = {RegistrationPageStyle.loginInput}
                        placeholder="ФИО"
                    />
                    <TextInput 
                        style = {RegistrationPageStyle.loginInput}
                        placeholder="Номер телефона"
                    />

                    <TextInput 
                        style = {RegistrationPageStyle.loginInput}
                        placeholder="Пароль"
                        secureTextEntry={true}
                    />
                    <TouchableOpacity style = {RegistrationPageStyle.buttonOpacity}>
                        <Text style = {RegistrationPageStyle.textSignIn}>Регистрация</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}