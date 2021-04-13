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
    nameRestaurant: {
        fontFamily: "Montserrat-Medium",
        fontSize: 25,
        margin: 20
    },
    dishName: {
        fontFamily: "Montserrat-Regular",
        fontSize: 21,
        marginTop: 6,
        marginLeft: 10,
    },
    imgStyle: {
        width: 100,
        height: 100,
        borderRadius: 20,
        flex: 1,
    },
    bottomElemView: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    buttonsChange: {
        backgroundColor: '#FECA57',
        width: 40,
        height: 40,
        borderRadius: 10
    },
    buttonsText: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 27,
        textAlign: 'center',
    },
    defaultText: {
        fontFamily: 'Montserrat-Light',
        fontSize: 15
    },
    deliveryText: {
        fontFamily: "Montserrat-Regular",
        fontSize: 16,
        margin: 4,
        marginLeft: 10
    },
    deliveryPrice: {
        fontFamily: 'Montserrat-Light',
        fontSize: 16,
        alignSelf: 'center',
        marginRight: 10
    },
    bottomStyle: {
        padding: 10,
        paddingHorizontal: 20,
        backgroundColor: 'white'
    },
    totalPriceView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    payButtonView: {
        alignSelf: 'center',
        padding: 5,
        marginTop: 20,
        backgroundColor: '#31B9CC',
        borderRadius: 20,
        paddingHorizontal: 70
    },
    bottomViewText: {
        fontFamily: "Montserrat-Regular",
        fontSize: 17
    },
    descrView: {
        padding: 5,
        backgroundColor: 'white',
        marginVertical: 6,
        marginHorizontal: 15,
        elevation: 5,
    }
})

export {StyleDishesListBasket}
