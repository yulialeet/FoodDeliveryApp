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

    state = {
        login: '',
        password: ''
    }
    LogInPress = async(loginuser, passw) => {
        try {
            const res = await fetch(myURL+'/loginuser?' + new URLSearchParams({
                login: loginuser,
                password: passw
            }))
            const resText = await res.json();
            console.log(resText)
            if (resText.length !== 0) {
                console.log('okay')
            } else {
                console.log('incorrect')
            }
        } catch(error) {
            console.log(error);
        }
    }

    render(){
        const { navigation } = this.props;
        return(
            <View style = {LoginPageStyle.defaultView}>
                <View style = {LoginPageStyle.viewForInputs}>
                    <TextInput 
                        style = {LoginPageStyle.areaInput}
                        placeholder="Номер телефона"
                        onChangeText={(text) => this.setState({login:text})}
                    />

                    <TextInput 
                        style = {LoginPageStyle.areaInput}
                        placeholder="Пароль"
                        //secureTextEntry={true}
                        onChangeText={(text) => this.setState({password:text})}
                    />
                    <TouchableOpacity 
                        style = {LoginPageStyle.buttonOpacity}
                        onPress = {() => {
                            this.LogInPress(this.state.login, this.state.password)
                            //this.props.userLogIn(true)
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
        userLogIn: (eventt) => dispatch(ActionIsLoggedIn(eventt))
    }
} 

export default connect(null, mapDispatchToProps)(LoginPage)
