import {StyleSheet} from 'react-native'

const StyleUserOrders = StyleSheet.create({
    elementsView: {
        backgroundColor: 'white',
        margin: 10,
        elevation: 4,
        borderRadius: 17,
        padding: 15
    },
    viewDishes: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 40
    },
    defaultText: {
        fontFamily: 'Montserrat-Light',
        fontSize: 16
    }
})

export {StyleUserOrders}