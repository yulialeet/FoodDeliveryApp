import {StyleSheet} from 'react-native'

const StyleNewDeliveryAddress = StyleSheet.create({
    viewForInputs: {
        paddingTop: 10,
        marginHorizontal: 20,
    },
    loginInput: {
        fontFamily: "Montserrat-Light",
        fontSize: 20,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#FECA57',
        marginBottom: 30,
        borderRadius: 7,
        backgroundColor: 'white'
    },
    CurAddress: {
        margin: 20
    },
    defaultText: {
        fontFamily: "Montserrat-Light",
        fontSize: 18,
    },
    changeAddr: {
        borderWidth: 2,
        borderRadius: 7,
        padding: 10,
        backgroundColor: '#31B9CC',
        borderColor: '#31B9CC'
    },
    butText: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    }
})

export {StyleNewDeliveryAddress}