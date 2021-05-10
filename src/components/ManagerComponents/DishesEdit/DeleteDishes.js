import React from 'react'
import { ActivityIndicator, Alert, Image, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import myURL from '../../../CommonURL/myURL'
import { Buffer } from 'buffer'
import { DeleteDishesStyle } from './DeleteDishesStyle'

class DeleteDishes extends React.Component {

    state = {
        isReady: false, 
        dishesList: []
    }

    componentDidMount() {
        this.takeDishesList()
    }


    takeDishesList = async() => {
        try {
            const res = await fetch(myURL+'/dishesList?idRest='+Number(this.props.idRest.map((e) => e.RestaurantidRestaurant)))
            const resText = await res.json();
            this.setState({dishesList: resText, isReady: true})
        } catch(error) {
            console.log(error);
        }
    }

    sendReqToServer = async(iddish) => {
        try {
            this.setState({isReady: false})
            const res = await fetch(myURL+'/deleteDish?idDish='+iddish, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-type': 'application/json'
                }
            }
            )
            this.takeDishesList()
            if (res.ok) {
                Alert.alert('Успешно удалено!')
            } else {
                Alert.alert('Что-то пошло не так :(')
            }
           
        } catch(error) {
            console.log(error)
        }
    }

    shouldRender = () => {
        if (this.state.isReady) {
            return (
                <View style = {{flex: 1}}>
                    <FlatList
                        data = {this.state.dishesList}
                        keyExtractor={(item, index) => index.toString()}
                       // onEndReached={() => {
                       //     this.setState({isReady: true})
                        //}}
                        renderItem = {({item}) => (
                            <View style = {DeleteDishesStyle.componentsView}>
                                    <View style = {{maxWidth: 168}}>
                                        <Text style = {DeleteDishesStyle.defaultText}>{item.NameDish}</Text>
                                        <View style = {{justifyContent: 'center'}}>
                                            <Image
                                                source = {{uri: "data:image/png;base64,"+Buffer.from(item.PhotoDish).toString('base64')}}
                                                style = {DeleteDishesStyle.img}
                                            />
                                        </View>
                                    </View>
                                    <View style = {DeleteDishesStyle.viewButton}>
                                        <TouchableOpacity
                                            onPress = {() => {
                                                this.sendReqToServer(item.idDish)
                                            }}    
                                        >
                                            <Text style = {DeleteDishesStyle.textDel}>Удалить блюдо</Text>
                                        </TouchableOpacity>
                                    </View>
                            </View>
                        )}
                    />
                </View>
            )
        } else {
            return (
                <View style = {{flex: 1, justifyContent: 'center'}}>
                    <ActivityIndicator 
                        size = "large" 
                        color= "#FECA57"
                    />
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
    return {
        idRest: state.infoManager.infoManager
    }
}
export default connect(mapStateToProps)(DeleteDishes)
