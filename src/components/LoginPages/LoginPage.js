import React from 'react'
import {
    Image,
    View,
    Text,
    TouchableOpacity,
    Alert,
    TextInput
  } from 'react-native';
import { connect } from 'react-redux';
import { ActionIsLoggedIn } from '../../store/actions/ActionIsLoggedIn';
  import {LoginPageStyle} from './LoginPageStyle'


class LoginPage extends React.Component {

    render(){
        const { navigation } = this.props;
        return(
            <View style = {LoginPageStyle.defaultView}>
                <View style = {LoginPageStyle.viewForInputs}>
                    <TextInput 
                        style = {LoginPageStyle.areaInput}
                        placeholder="Номер телефона"
                    />

                    <TextInput 
                        style = {LoginPageStyle.areaInput}
                        placeholder="Пароль"
                        secureTextEntry={true}
                    />
                    <TouchableOpacity 
                        style = {LoginPageStyle.buttonOpacity}
                        onPress = {() => {
                            this.props.userLogIn()
                        }}
                    >
                        <Text style = {LoginPageStyle.textSignIn}>Вход</Text>
                    </TouchableOpacity>


                    <Text style = {LoginPageStyle.textForRegistration}>Еще нет аккаунта?</Text>
                    <TouchableOpacity 
                        style = {LoginPageStyle.buttonOpacity}
                        onPress = {() => {
                            navigation.navigate('Registration')
                        }}
                    >
                        <Text style = {LoginPageStyle.textSignIn}>Регистрация</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        userLogIn: () => dispatch(ActionIsLoggedIn())
    }
} 

export default connect(null, mapDispatchToProps)(LoginPage)
