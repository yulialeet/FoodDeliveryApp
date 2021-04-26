import {StyleSheet} from 'react-native'

const StyleOrdersRestaurant = StyleSheet.create({
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
        borderBottomWidth: 1,
        borderColor: '#C1C1C1',
        margin: 7
    },
    defaultText: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 18
    },
    elementsViewReady: {
        backgroundColor: '#DCFFDD',
        margin: 10,
        elevation: 4,
        borderRadius: 17,
        padding: 15
    },
})

export {StyleOrdersRestaurant}