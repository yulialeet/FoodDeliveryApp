import React  from 'react';
import {
    Text,
    View,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import {FoodCategoriesStyle} from './HomeFoodStyles/FoodCategoriesStyle'
import { connect } from 'react-redux'
import myURL from '../../CommonURL/myURL'
import  { ActionRestaurantToFoodList }  from '../../store/actions/ActionRestaurantToFoodList'
import { ActionTakeDishesList } from '../../store/actions/ActionTakeDishesList';

class ScrollCategories extends React.Component {
    state = {
        isCategorySelected: ''
    };
    SelectedCategoryState = (key) => {
        this.setState(({
            isCategorySelected: key
        }))
    }

    changeCategory = async() => {
        try {
        const res = await fetch(myURL+'/dishesForCategory?' + new URLSearchParams({
            idCategory: this.state.isCategorySelected,
            idRest: this.props.idRest
        }))
        const resText = await res.json();
        await this.props.setDishList(resText)
        } catch(error) {
        console.log(error);
        }
    }


    render(){
        return (
            <View style = {FoodCategoriesStyle.styleFlatlist}>
                <FlatList
                    data = {this.props.DishesCategories}
                    horizontal = {true}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem = {({item}) => (
                        <TouchableOpacity onPress = {() => {
                            this.SelectedCategoryState(item.idCategoryDish)
                            console.log(this.props.idRest)
                            this.changeCategory()
                        }} >
                            <Text style = {[item.idCategoryDish === this.state.isCategorySelected ? FoodCategoriesStyle.selectedComponentStyle: FoodCategoriesStyle.defaultComponentStyle]} >{item.NameCategory}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        )
        
    }}

    const mapStateToProps = (state) => {
        return{
            DishesCategories: state.dishesCategories.DishesCategories,
            idRest: state.nameRestaurant.nameRestaurant
        }
      }

    const mapDispatchToProps = (dispatch) => {
        return{
            setDishList: (eventt) => dispatch(ActionTakeDishesList(eventt)),
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(ScrollCategories)