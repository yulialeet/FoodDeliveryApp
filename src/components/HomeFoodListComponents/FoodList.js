import React  from 'react';
import {
    Image,
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Alert,
} from 'react-native';
import { connect } from 'react-redux'
import { Rests } from '../HomePageComponents/DataRestaurants';
import { FoodListStyle } from './HomeFoodStyles/FoodListStyle'
import { Buffer } from 'buffer'


class FoodList extends React.Component {



    render() {
    return (
        <View style = {FoodListStyle.mainView}>
            <FlatList
                data = {this.props.DishesList}
                keyExtractor={(item, index) => index.toString()}
                renderItem = {({item}) => (
                    <TouchableOpacity style = {FoodListStyle.mainContainer} >

                            <View>
                                <Text style = {FoodListStyle.nameOfRestaurant}>{item.NameDish}</Text>
                                <View style = {FoodListStyle.buttonAndPriceView}>
                                    <TouchableOpacity style = {FoodListStyle.buttonAdd}>
                                        <Text style = {FoodListStyle.textAdd}>Добавить</Text>
                                    </TouchableOpacity>
                                    <Text style = {FoodListStyle.priceOfFood}>{item.PriceDish} р.</Text>
                                </View>
                            </View>

                            <View>
                                <Image
                                    source = {{uri: "data:image/png;base64,"+Buffer.from(item.PhotoDish).toString('base64')}}
                                    style = {FoodListStyle.pictureFood}
                                />
                            </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}}

const mapStateToProps = (state) => {
    return{
        DishesList: state.dishesList.DishesList
    }
}

export default connect(mapStateToProps, null)(FoodList)