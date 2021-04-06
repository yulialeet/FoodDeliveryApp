import React from 'react'
import {
    View,
    TouchableOpacity,
    Text,
    Alert
} from 'react-native'
import {ReviewsAndWorkTimeStyle} from './HomeFoodStyles/ReviewsAndWorkTimeStyle'
import { connect } from 'react-redux'
import { ActionInfoAboutRestaurant } from '../../store/actions/ActionInfoAboutRestaurant'
import  myURL  from '../../CommonURL/myURL'

class ReviewsAndWorkTime extends React.Component {

    showInfo = async() => {
        const { navigation } = this.props;
        try {
            const res = await fetch(myURL+'/infoAboutRestaurant?idRest='+this.props.TakeIdRestaurant)
            const resText = await res.json();
            await this.props.setInfoRest(resText)
            navigation.navigate('AboutRestaurant')
        } catch(error) {
            console.log(error);
        }
    }


    render() {
        const { navigation } = this.props;
    return(
        <View>
                <View style = {ReviewsAndWorkTimeStyle.mainContainer}>
                    <TouchableOpacity 
                        style = {ReviewsAndWorkTimeStyle.childContainer}
                        onPress = {() => {
                            this.showInfo()
                            
                        }}
                    >
                        <Text style = {ReviewsAndWorkTimeStyle.textStyle}>О ресторане, отзывы</Text>
                    </TouchableOpacity>
            

                </View>
        </View>
    )
}}

const mapStateToProps = (state) => {
    return{
        TakeIdRestaurant: state.nameRestaurant.nameRestaurant
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setInfoRest: (infoRest) => dispatch(ActionInfoAboutRestaurant(infoRest))
    }
}


  
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsAndWorkTime)