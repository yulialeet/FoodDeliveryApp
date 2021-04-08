import React from 'react'
import { View, 
        Text,
        TextInput,
        TouchableOpacity,
        Alert
} from 'react-native'
import { StyleReviews } from './StyleReviews'
import { connect } from 'react-redux'
import { Rating, AirbnbRating } from 'react-native-ratings';
import myURL from '../../CommonURL/myURL'

class AddReview extends React.Component {

    state = {
        textReview: '',
        rating: 4
    }

    sendReview = async() => {
        try {
            const res = await fetch(myURL+'/addNewReview?' + new URLSearchParams({
                idClient: this.props.clientId,
                idRest: this.props.restaurantId,
                description: this.state.textReview,
                rating: this.state.rating
            }))
            const resText = await res.json();
            Alert.alert('Отзыв успешно отправлен!')
            this.setState({textReview: ''})
        } catch(error) {
            console.log(error);
        }
    }

    setRating = (rating) => {
        this.setState({rating: rating})
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
                            defaultRating={4}
                            size={25}
                            reviewSize = {0}
                            onFinishRating = {this.setRating}
                        />
                    </View>
                    <TouchableOpacity 
                        style = {StyleReviews.buttonAdd}
                        onPress = {() => {this.sendReview()}}
                    >
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