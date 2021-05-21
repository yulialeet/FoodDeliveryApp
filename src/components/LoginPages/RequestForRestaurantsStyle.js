import {StyleSheet} from 'react-native'

const RequestForRestaurantsStyle = StyleSheet.create({
    mainView: {
        marginHorizontal: 15,
        marginVertical: 10,
        marginTop: 20
    },
    textStyle: {
        fontFamily: 'Montserrat-Light',
        fontSize: 16,
        color: 'grey'
    },
    inputsStyle: {
        borderBottomWidth: 2,
        fontFamily: 'Montserrat-Light',
        fontSize: 18,
        paddingBottom: 1,
        paddingTop: 3,
        paddingHorizontal: 10,
        borderColor: '#31B9CC',
        marginBottom: 30
    },
    buttonArea: {
        backgroundColor: '#FECA57',
        paddingVertical: 15,
        borderRadius: 20,
        marginBottom: 40
    },
    buttonText: {
        fontFamily: 'Montserrat-Regular',
        textAlign: 'center',
        fontSize: 20,
        color: 'white'
    }
})
export {RequestForRestaurantsStyle}