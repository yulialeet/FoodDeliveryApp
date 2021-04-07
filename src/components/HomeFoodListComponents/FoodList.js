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
import { FoodListStyle } from './HomeFoodStyles/FoodListStyle'
import { Buffer } from 'buffer'
import { ActionIdChosenFood } from '../../store/actions/ActionIdChosenFood';
import { AddProduct, RemoveAllProducts } from '../../store/actions/ActionAddToShoppingCart';
import { ActionCurrentIdRestaurantCart, ActionCurrentNameRestaurantCart } from '../../store/actions/ActionCurrentIdRestaurantCart';


class FoodList extends React.Component {

    checkIsRestaurantAlreadyInCart = (idRest, idDish, nameRest) => {
        
        if (idRest == this.props.currentCartRest) {
            this.props.addToCart(idDish, 1)
            Alert.alert('Успешно добавлено в Вашу корзину!')
        } else if (this.props.currentCartRest == undefined){
            this.props.currentNameRest(nameRest)
            this.props.currentRestaurant(idRest)
            this.props.addToCart(idDish, 1)
            Alert.alert('Успешно добавлено в Вашу корзину!')
        } else {
            Alert.alert(
                "Внимание",
                "В вашей корзине уже есть товары из другого ресторана, очистить корзину?",
                [
                    {
                        text: "Нет",
                      //style: "cancel"
                    },

                    { 
                        text: "Да, очистить", onPress: () => {
                            this.props.currentRestaurant(idRest)
                            this.props.currentNameRest(nameRest)
                            this.props.removeCart()
                            this.props.addToCart(idDish, 1)
                        }
                    }
                ]
            )
        }
    }

    render() {
        const { navigation } = this.props;
    return (
        <View style = {FoodListStyle.mainView}>
            <FlatList
                data = {this.props.DishesList}
                keyExtractor={(item, index) => index.toString()}
                renderItem = {({item}) => (
                    <TouchableOpacity style = {FoodListStyle.mainContainer} onPress = {() => { 
                        
                        this.props.setId(item.idDish),
                        navigation.navigate('FoodPage')
                    }}
                    >
                            <View>
                                <Text style = {FoodListStyle.nameOfRestaurant}>{item.NameDish}</Text>
                                <View style = {FoodListStyle.buttonAndPriceView}>
                                    <TouchableOpacity 
                                        style = {FoodListStyle.buttonAdd}
                                        onPress = {() => {
                                            this.checkIsRestaurantAlreadyInCart(item.RestaurantidRestaurant, item.idDish, this.props.currentNameRestaurant)
                                        }}
                                    >
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
        DishesList: state.dishesList.DishesList,
        currentCartRest: state.currentIdRest.currentId,
        currentNameRestaurant: state.headerRestaurantName.nameRestaurant
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setId: (idDish) => dispatch(ActionIdChosenFood(idDish)),
        addToCart: (idDishToCart, countDishes) => dispatch(AddProduct(idDishToCart, countDishes)),
        currentRestaurant: (idRest) => dispatch(ActionCurrentIdRestaurantCart(idRest)),
        removeCart: () => dispatch(RemoveAllProducts()),
        currentNameRest: (nameRest) => dispatch(ActionCurrentNameRestaurantCart(nameRest))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodList)