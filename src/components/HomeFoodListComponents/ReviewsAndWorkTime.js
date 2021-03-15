import React from 'react'
import {
    View,
    TouchableOpacity,
    Text,
    Alert
} from 'react-native'
import {ReviewsAndWorkTimeStyle} from './HomeFoodStyles/ReviewsAndWorkTimeStyle'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

function ReviewsAndWorkTime() {
    return(
        <View>
                <View style = {ReviewsAndWorkTimeStyle.mainContainer}>
                    <TouchableOpacity style = {ReviewsAndWorkTimeStyle.childContainer}>
                        <MaterialCommunityIcons name = 'star' color = {"#FECA57"} borderWidth = {2} size={24}/>
                        <Text style = {ReviewsAndWorkTimeStyle.textStyle}>Отзывы</Text>
                    </TouchableOpacity>
            

                    <View style = {ReviewsAndWorkTimeStyle.childContainer}>
                        <MaterialCommunityIcons name = 'clock-outline' color = {"#FECA57"} size={24}  />
                        <Text style = {ReviewsAndWorkTimeStyle.textStyle}>Ворктайм</Text>
                    </View>
                </View>
        </View>
    )
}

export default ReviewsAndWorkTime