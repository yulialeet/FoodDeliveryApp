import React from 'react'
import { ActivityIndicator, Alert, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import { connect } from 'react-redux'
import myURL from '../../../CommonURL/myURL'
import { AddDishStyle } from './AddDishStyle'
import {launchImageLibrary} from 'react-native-image-picker'



class AddDish extends React.Component {

    state = {
        isReady: false,
        categoriesList: [],
        dishImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw_D80Fz0Hez3_O4hI7QI4IeNDbIE21QDZkA&usqp=CAU',

        category: '',
        dishName: '',
        weightDish: '',
        consist: '',
        priceDish: '',
        descriptionDish: '',
        imgData: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw_D80Fz0Hez3_O4hI7QI4IeNDbIE21QDZkA&usqp=CAU'
    }

    componentDidMount() {
        this.takeCategoriesList()
    }

    takeCategoriesList = async() => {
        try {
            const res = await fetch(myURL+'/allDishesCategories')
            const resText = await res.json()
            this.setState({categoriesList: resText, isReady: true})
        } catch(error) {
            console.log(error)
        }
    }
    
    handleChoosePhoto = () => {
        const options = {
            mediaType: 'photo'
        }
        launchImageLibrary(options, response => {
            console.log('response', response)
            const blob = response.blob()
            this.setState({dishImg: response.uri, imgData: blob})
            console.log(blob)
        })
    }

    sendToServer = async() => {
        console.log(this.state.descriptionDish)
        try {
            const res = await fetch(myURL+'/addDishToRestaurant?' + new URLSearchParams({
                idCategory: this.state.category,
                nameDish: this.state.dishName,
                description: this.state.descriptionDish,
                photoDish: this.state.imgData,
                priceDish: this.state.priceDish,
                idRest: Number(this.props.idRest.map((e) => e.RestaurantidRestaurant))
            }))
            const resText = res.json()
            console.log(resText)
        } catch(error) {
            console.log(error);
        }
        
    }

    shouldRender = () => {
        if (this.state.isReady) {
            return (
                <ScrollView>
                <View style = {AddDishStyle.mainView}>
                    <View style = {{minHeight: 100}}>
                        <Text style = {AddDishStyle.defaultText}>Выберите категорию:</Text>
                        <DropDownPicker
                            items = {this.state.categoriesList}
                            style = {{marginHorizontal: 55, minHeight: 50, borderWidth: 2, borderColor: "#FECA57"}}
                            defaultValue = {1}
                            dropDownStyle = {{width: 250, alignSelf: 'center', minHeight: 300}}
                            globalTextStyle = {{fontFamily: 'Montserrat-Light', fontSize: 16}}
                            itemStyle = {{borderBottomWidth: 1, borderColor: '#C1C1C1'}}
                            onChangeItem = {(stat) => {this.setState({category: stat.value})}}
                        />
                    </View>
                    <View>
                        <Text style = {AddDishStyle.defaultText}>Название блюда:</Text>
                        <TextInput 
                            style = {AddDishStyle.inputs}
                            onChangeText={(text) => this.setState({dishName: text})}
                        />

                        <Text style = {AddDishStyle.defaultText}>Вес блюда:</Text>
                        <TextInput 
                            style = {AddDishStyle.inputs}
                            onChangeText={(text) => this.setState({weightDish: text})}
                        />

                        <Text style = {AddDishStyle.defaultText}>Состав блюда:</Text>
                        <TextInput 
                            style = {AddDishStyle.inputs}
                            onChangeText={(text) => this.setState({consist: text})}
                        />
                        <Text style = {AddDishStyle.defaultText}>Фото блюда:</Text>
                        <View style = {{flexDirection: 'row-reverse', justifyContent: 'space-between', marginBottom: 20}}>
                            <TouchableOpacity
                                onPress = {() => {
                                    this.handleChoosePhoto()
                                }}
                                style = {AddDishStyle.choosePhoto}
                            >
                                <Text style = {AddDishStyle.defaultText}>Выбрать</Text>
                            </TouchableOpacity>
                            <Image 
                                source = {{uri: this.state.dishImg}} 
                                style = {{width: 150, height: 150}}
                            />
                        </View>

                        <Text style = {AddDishStyle.defaultText}>Цена:</Text>
                        <TextInput 
                            style = {AddDishStyle.inputs}
                            onChangeText={(text) => this.setState({priceDish: text})}
                        />
                        </View>

                        <TouchableOpacity
                            style = {AddDishStyle.buttonSend}
                            onPress = {() => {
                                if (this.state.dishName.length == 0) {
                                    Alert.alert('Название блюда не может быть пустым')
                                } else if (this.state.priceDish.length == 0) {
                                    Alert.alert('Введите стоимость блюда')
                                } else {
                                    this.setState({descriptionDish: this.state.weightDish + '\r\n' + this.state.consist}, this.sendToServer)
                                }
                            }}
                        >
                            <Text style = {{fontFamily: 'Montserrat-Regular', fontSize: 22, color: 'white'}}>Добавить блюдо</Text>
                        </TouchableOpacity>
                        
                </View>
                </ScrollView>
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
        //console.log(Number(this.props.idRest.map((e) => e.RestaurantidRestaurant)))
        
        return (
            <this.shouldRender/>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        idRest: state.infoManager.infoManager
    }
}
export default connect(mapStateToProps)(AddDish)