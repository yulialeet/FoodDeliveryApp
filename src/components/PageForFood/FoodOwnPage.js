import React from 'react';
import { FlatList, SafeAreaView, Text, Image, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import myURL from '../../CommonURL/myURL'
import { Buffer } from 'buffer'
import {StyleFoodOwnPage} from './StyleFoodOwnPage'


class FoodOwnPage extends React.Component {

    state = {
        priceDish: 'd',
        countDish: 1,
        endPrice: 111
    }

    initialPrice = (initPrice) => {
        this.setState({
            priceDish: initPrice,
            endPrice: initPrice
        })
    }

    componentDidMount() {
        this.initialPrice(this.Price)
    }
    Price = 100

    minusCounter = () => {
        if (this.state.countDish != 1) {
            this.setState({
                countDish: this.state.countDish - 1
            }, this.totalPrice)
        }
    }

    totalPrice = () => {
        this.setState ({
            endPrice: this.state.countDish*this.state.priceDish
        })
    }
    plusCounter = () => {
        this.setState({
            countDish: this.state.countDish + 1
        }, this.totalPrice)
    }

    render() {
        return(
            <SafeAreaView>
                <FlatList
                    data = {this.props.dishInfo}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem = {({item}) => (
                        <View>
                            <Image
                                source = {{uri: "data:image/png;base64,"+Buffer.from(item.PhotoDish).toString('base64')}}
                                style = {StyleFoodOwnPage.pictureFood}
                            />
                            <Text style = {StyleFoodOwnPage.nameDish}>{item.NameDish}</Text>
                            <Text style = {StyleFoodOwnPage.descriptionFood}>{item.DescriptionDish}</Text>
                                <Text style = {StyleFoodOwnPage.hiddenTxt}>{this.Price = item.PriceDish}</Text>
                           
                            <View style = {StyleFoodOwnPage.BottomView}>
                                <TouchableOpacity 
                                    style = {StyleFoodOwnPage.buttonsChange} 
                                    onPress = {() => {
                                        this.minusCounter()
                                    }}
                                >
                                    <Text style = {StyleFoodOwnPage.buttonsText}> - </Text>
                                </TouchableOpacity>

                                <Text style = {StyleFoodOwnPage.bottomText}>{this.state.countDish}</Text>

                                <TouchableOpacity 
                                    style = {StyleFoodOwnPage.buttonsChange}
                                    onPress = {() => {
                                        this.plusCounter()
                                    }}
                                >
                                    <Text style = {StyleFoodOwnPage.buttonsText}> + </Text>
                                </TouchableOpacity>

                                <Text style = {StyleFoodOwnPage.bottomText}>{this.state.endPrice} { } руб.</Text>

                                <TouchableOpacity style = {StyleFoodOwnPage.buttonAdd}> 
                                    <Text style = {StyleFoodOwnPage.bottomText}>Добавить</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                    
                
                />
            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        dishInfo: state.dishInfo.dishInfo
    }
}
export default connect(mapStateToProps, null)(FoodOwnPage)