import React from 'react'
import { View, 
        Text,
        TextInput,
        TouchableOpacity
} from 'react-native'
import { StyleReviews } from './StyleReviews'
import { connect } from 'react-redux'
import { Rating, AirbnbRating } from 'react-native-ratings';

class AddReview extends React.Component {

    state = {
        textReview: ''
    }
    render() {
        return (
            <View style = {{marginTop: 10, marginHorizontal: 10}}>
                <Text style = {StyleReviews.TextToAdd}>Оставьте свой отзыв:</Text>
                <View style = {StyleReviews.AddReviewMainView}>
                    <TextInput 
                        style = {{backgroundColor: 'white'}}
                        maxLength={150}
                        numberOfLines={4}
                        fontFamily = 'Montserrat-Light'
                        fontSize = {16}
                        textAlignVertical = 'top'
                        placeholder = "Ваш отзыв здесь"
                        onChangeText={(text) => this.setState({textReview:text})}
                    > </TextInput>
                </View>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between', marginVertical: -20,  zIndex: 1}}>
                    <View style = {{marginTop: -10}}>
                        <AirbnbRating
                            count={5}
                            reviews={["", "", "", "", ""]}
                            defaultRating={5}
                            size={25}
                            reviewSize = {0}
                        />
                    </View>
                    <TouchableOpacity style = {StyleReviews.buttonAdd}>
                        <Text style = {StyleReviews.textButtonAdd}>Отправить</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        restaurantId: state.nameRestaurant.nameRestaurant,
        clientId: state.userRole.clientId,
    }
}

export default connect(mapStateToProps)(AddReview)