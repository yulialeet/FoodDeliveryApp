import {StyleSheet} from 'react-native'

const FoodCategoriesStyle = StyleSheet.create({
    styleFlatlist: {
        display: 'flex',
        flexDirection: 'row',
        height: 50,
        marginVertical: 5,
    },
    defaultComponentStyle: {
        fontSize: 16,
        backgroundColor:'#C1C1C1',
        margin: 5,
        padding: 5,
        paddingHorizontal: 10,
        borderRadius: 30,
        fontFamily: "Montserrat-Light",
    },
    selectedComponentStyle: {
        fontSize: 16,
        fontFamily: "Montserrat-Light",
        backgroundColor:'#FECA57',
        margin: 5,
        padding: 5,
        paddingHorizontal: 10,
        borderRadius: 30,
    },
})

export {FoodCategoriesStyle}