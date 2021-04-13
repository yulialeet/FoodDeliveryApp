import React from 'react'
import {
    Image,
    View,
    Text,
    TouchableOpacity,
    Alert,
    TextInput,
    TouchableNativeFeedbackBase
  } from 'react-native';
import { connect } from 'react-redux';
import { ActionIsLoggedIn } from '../../store/actions/ActionIsLoggedIn';
import { ActionManagerInfo } from '../../store/actions/ActionManagerInfo';
import { ActionClientId, ActionUserId, ActionUserRole } from '../../store/actions/ActionUserRole';
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
            if (resText.length !== 0) {
                
                this.props.setUserRole(Number(resText.map((e) => e.UserRole)))
                this.props.setUserId(Number(resText.map((e) => e.idUser)))
                if (Number(resText.map((e) => e.UserRole)) == 0) {
                    try {
                        const resk = await fetch(myURL+'/getClientId?idUser='+Number(resText.map((e) => e.idUser)))
                        const resTextk = await resk.json();
                        this.props.setClientId(Number(resTextk.map((e) => e.idClient)))
                    } catch(error) {
                        console.log(error);
                    }
                } else {
                    try {
                        const infomanager = await fetch(myURL+'/infoAboutManager?idUser='+Number(resText.map((e) => e.idUser)))
                        const infoManag = await infomanager.json()
                        this.props.setManagerInfo(infoManag)
                    } catch (error) {
                        console.log(error)
                    }
                }
                this.props.userLogIn(true)
            } else {
                this.props.userLogIn(false)
                Alert.alert('Неправильный логин или пароль')
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
                        secureTextEntry={true}
                        onChangeText={(text) => this.setState({password:text})}
                    />
                    <TouchableOpacity 
                        style = {LoginPageStyle.buttonOpacity}
                        onPress = {() => {
                            this.LogInPress(this.state.login, this.state.password)
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
        userLogIn: (eventt) => dispatch(ActionIsLoggedIn(eventt)),
        setUserRole: (role) => dispatch(ActionUserRole(role)),
        setUserId: (userId) => dispatch(ActionUserId(userId)),
        setClientId: (clientId) => dispatch(ActionClientId(clientId)),
        setManagerInfo: (inf) => dispatch(ActionManagerInfo(inf))
    }
} 

export default connect(null, mapDispatchToProps)(LoginPage)
