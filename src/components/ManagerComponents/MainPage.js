import React from 'react'
import { Text, View, ActivityIndicator, TouchableOpacity} from 'react-native'
import { connect } from 'react-redux';

class MainPage extends React.Component {

    componentDidMount() {
        console.log(Number(this.props.infoManager.map((e) => e.RestaurantidRestaurant)))
    }
    shouldRender = () => {
        const { navigation } = this.props;
        return (
            // <View style = {{flex: 1, justifyContent: 'center'}}>
            //         <ActivityIndicator 
            //             size = "large" 
            //             color="#FECA57"
            //         />
            // </View>
            <View>
                <TouchableOpacity
                    onPress = {() => {
                        navigation.navigate('Orders')
                    }}
                >
                    <Text style = {{fontSize: 30}}>Заказы</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style = {{fontSize: 30}}>Статистика</Text>
                </TouchableOpacity>
            </View>
        )
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