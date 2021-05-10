import {StyleSheet} from 'react-native'

const FoodListStyle = StyleSheet.create({
    mainView: {
        flex: 1,
    },
    mainContainer: {
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
    pictureFood: {
        width: 100,
        height: 100,
        borderRadius: 20
    },
    leftPart: {
        maxWidth: 210
    },
    nameOfRestaurant: {
        fontSize: 23,
        fontFamily: "Montserrat-Light",
        marginTop: 12,
        marginLeft: 20,
    },
    buttonAdd: {
        backgroundColor: '#31B9CC',
        paddingHorizontal: 5,
        paddingVertical: 3,
        borderRadius: 5,
        width: 120,
        marginLeft: 15,
        marginTop: 12
    },
    textAdd: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 15,
        textAlign: 'center'
    },
    priceOfFood: {
        fontFamily: "Montserrat-Regular",
        fontSize: 16,
        paddingTop: 10,
    },
    buttonAndPriceView: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 210,
        marginBottom: 15
    },
});
export {FoodListStyle}