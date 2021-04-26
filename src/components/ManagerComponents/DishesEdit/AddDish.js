import React from 'react'
import { ActivityIndicator, Text, TextInput, View } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import { connect } from 'react-redux'
import myURL from '../../../CommonURL/myURL'
import { AddDishStyle } from './AddDishStyle';

class AddDish extends React.Component {

    state = {
        isReady: false,
        categoriesList: []
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

    shouldRender = () => {
        if (this.state.isReady) {
            console.log(this.state.categoriesList)
            return (
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
                        />
                    </View>
                    <View>
                        <Text style = {AddDishStyle.defaultText}>Название блюда:</Text>
                        <TextInput 
                            style = {AddDishStyle.inputs}
                        />

                        <Text style = {AddDishStyle.defaultText}>Вес блюда:</Text>
                        <TextInput 
                            style = {AddDishStyle.inputs}
                        />

                        <Text style = {AddDishStyle.defaultText}>Состав блюда:</Text>
                        <TextInput 
                            style = {AddDishStyle.inputs}
                        />
                        </View>
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
        console.log(Number(this.props.idRest.map((e) => e.RestaurantidRestaurant)))
        
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