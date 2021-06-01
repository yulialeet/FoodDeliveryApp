import React from 'react'
import { ScrollView, Text, TextInput, TouchableOpacity, View, Alert, ActivityIndicator } from 'react-native'
import { RequestForRestaurantsStyle } from './RequestForRestaurantsStyle'


class RequestForRestaurants extends React.Component {
    state = {
        isReady: true,
        stName: '',
        phoneNumber: '',
        email: '',
        innorg: '',
        ogrn: '',
        yraddr: '' ,
        factaddr: '',
        bik: '',
        checkaccount: ''
    }

    sendToServer = async() => {
        try {
            this.setState({isReady: false})
            const res = await fetch(myURL+'/sendemail' , {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    stName: this.state.stName,
                    phoneNumber: this.state.phoneNumber,
                    emailaddr: this.state.email,
                    innorg: this.state.innorg,
                    ogrn: this.state.ogrn,
                    yraddr: this.state.yraddr,
                    factaddr: this.state.factaddr,
                    bik: this.state.bik,
                    checkaccount: this.state.checkaccount
                })
            }
            )
            console.log(res)
            if (res.ok) {
                Alert.alert('Успешно отправлено!')
                this.setState({stName: '', phoneNumber: '', email: '', innorg: '', ogrn: '', yraddr: '' , factaddr: '', bik: '', checkaccount: '', isReady: true})
            } else {
                Alert.alert('Что-то пошло не так :(')
            }
        } catch(error) {
            console.log(error);
        }
        
    }

    shouldRender = () => {
        if (this.state.isReady) {
            return (
                <ScrollView>
                <View style = {RequestForRestaurantsStyle.mainView}>
                    <Text style = {RequestForRestaurantsStyle.textStyle}>
                        Имя
                    </Text>
                    <TextInput 
                        onChangeText={(text) => this.setState({stName:text})}
                        style = {RequestForRestaurantsStyle.inputsStyle}
                    />


                    <Text style = {RequestForRestaurantsStyle.textStyle}>
                        Телефон
                    </Text>
                    <TextInput 
                        onChangeText={(text) => this.setState({phoneNumber:text})}
                        style = {RequestForRestaurantsStyle.inputsStyle}
                    />


                    <Text style = {RequestForRestaurantsStyle.textStyle}>
                        Электронная почта
                    </Text>
                    <TextInput 
                        style = {RequestForRestaurantsStyle.inputsStyle}
                        onChangeText={(text) => this.setState({email:text})}
                    />

                    <Text style = {RequestForRestaurantsStyle.textStyle}>
                        ИНН организации
                    </Text>
                    <TextInput 
                        style = {RequestForRestaurantsStyle.inputsStyle}
                        onChangeText={(text) => this.setState({innorg:text})}
                    />


                    <Text style = {RequestForRestaurantsStyle.textStyle}>
                        ОГРН организации
                    </Text>
                    <TextInput 
                        style = {RequestForRestaurantsStyle.inputsStyle}
                        onChangeText={(text) => this.setState({ogrn:text})}
                    />


                    <Text style = {RequestForRestaurantsStyle.textStyle}>
                        Юридический адрес
                    </Text>
                    <TextInput 
                        style = {RequestForRestaurantsStyle.inputsStyle}
                        onChangeText={(text) => this.setState({yraddr:text})}
                    />

                    <Text style = {RequestForRestaurantsStyle.textStyle}>
                        Фактический адрес
                    </Text>
                    <TextInput 
                        style = {RequestForRestaurantsStyle.inputsStyle}
                        onChangeText={(text) => this.setState({factaddr:text})}
                    />

                    <Text style = {RequestForRestaurantsStyle.textStyle}>
                        БИК (Банковский идентификационный код)
                    </Text>
                    <TextInput 
                        style = {RequestForRestaurantsStyle.inputsStyle}
                        onChangeText={(text) => this.setState({bik:text})}
                    />

                    <Text style = {RequestForRestaurantsStyle.textStyle}>
                        Расчетный счет
                    </Text>
                    <TextInput 
                        style = {RequestForRestaurantsStyle.inputsStyle}
                        onChangeText={(text) => this.setState({checkaccount:text})}
                    />


                    <TouchableOpacity 
                        style = {RequestForRestaurantsStyle.buttonArea}
                        onPress = {() => {
                            if (this.state.bik.length == 0 || this.state.checkaccount.length == 0 || this.state.email.length == 0 || this.state.factaddr.length == 0 || this.state.innorg.length == 0 || this.state.ogrn.length == 0  || this.state.phoneNumber.length == 0 || this.state.stName.length == 0 || this.state.yraddr.length == 0) {
                                Alert.alert('Заполните все поля формы!')
                            } else {
                                this.sendToServer()
                            }
                        }}
                    >
                        <Text style = {RequestForRestaurantsStyle.buttonText}> Отправить заявку</Text>
                    </TouchableOpacity>
                </View>
                </ScrollView>
            )
        } else {
            return (
                <View style = {{flex: 1, justifyContent: 'center'}}>
                        <ActivityIndicator 
                            size = "large" 
                            color="#FECA57"
                        />
                </View>
            )
        }
    }
    render(){
        return (
            <this.shouldRender />
        )
    }
}

export default RequestForRestaurants