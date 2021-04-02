import {StyleSheet} from 'react-native'

const StyleDishesListBasket = StyleSheet.create({
    viewBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        backgroundColor: 'white',
        marginVertical: 6,
        marginHorizontal: 15,
        borderRadius: 20,
        elevation: 5,
    },
    viewLeft: {
        flex: 2,
    },
    dishName: {

    },
    imgStyle: {
        width: 100,
        height: 100,
        borderRadius: 20,
        flex: 1,
    }
})

export {StyleDishesListBasket}
