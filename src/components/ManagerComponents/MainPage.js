import React from 'react'
import { Text, View, ActivityIndicator, TouchableOpacity} from 'react-native'
import { connect } from 'react-redux';
import myURL from '../../CommonURL/myURL';
import { StyleMainPage } from './StyleMainPage';

class MainPage extends React.Component {

    state = {
        nameRestaurant: '',
        isReady: false
    }
    componentDidMount() {
        this.takeNameRest()
    }
    takeNameRest = async() => {
        try{
            const res = await fetch(myURL+'/nameRestaurant?idRest='+(Number(this.props.infoManager.map((e) => e.RestaurantidRestaurant))))
            const resText = await res.json()
            this.setState({nameRestaurant: resText.map((e) => e.NameRestaurant), isReady: true})
        } catch(error) {
            console.log(error)
        }
    }
    shouldRender = () => {
        const { navigation } = this.props;
        if (!this.state.isReady) {
            return (
                <View style = {{flex: 1, justifyContent: 'center'}}>
                    <ActivityIndicator 
                        size = "large" 
                        color="#FECA57"
                    />
                </View>
            )
        } else {
            return (
                <View style = {{flex: 1}}>
                    <Text style = {StyleMainPage.nameRest}>{this.state.nameRestaurant}</Text>
                    <View style = {StyleMainPage.mainCont}>
                    <TouchableOpacity
                        style = {StyleMainPage.touchBox}
                        onPress = {() => {
                            navigation.navigate('Orders')
                        }}
                    >
                        <Text style = {StyleMainPage.defaultText}>Заказы</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style = {StyleMainPage.touchBox}
                    
                    >
                        <Text style = {StyleMainPage.defaultText}>Статистика</Text>
                    </TouchableOpacity>
                </View>
                </View>
            )
        }
    }

    render() {
        return (
            <this.shouldRender />
        )
    }
}


const mapStateToProps = (state) => {
    return{
        infoManager: state.infoManager.infoManager
    }
}


export default connect(mapStateToProps)(MainPage)