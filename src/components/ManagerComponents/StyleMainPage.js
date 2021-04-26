import {StyleSheet} from 'react-native'

const StyleMainPage = StyleSheet.create({
    mainCont: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 50
    },
    defaultText: {
        fontFamily: 'Montserrat-Light',
        fontSize: 25,
        textAlign: 'center'
    },
    touchBox: {
        margin: 15,
        padding: 10,
        borderWidth: 2,
        borderRadius: 20,
        borderColor: '#31B9CC',
        backgroundColor: 'white'
    },
    nameRest: {
        fontFamily: 'Montserrat-Light',
        fontSize: 40,
        textAlign: 'center',
        marginTop: 50
    }
})

export {StyleMainPage}