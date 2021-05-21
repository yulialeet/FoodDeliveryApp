import {StyleSheet} from 'react-native'

const LoginPageStyle = StyleSheet.create({
    defaultView: {
        backgroundColor: '#F0F0F0',
        display: 'flex',
        flex: 1,
    },
    viewForInputs: {
        paddingTop: 200,
        marginHorizontal: 20,
    },
    textsOptions: {
        fontFamily: "Montserrat-Light",
        fontSize: 21
    },
    areaInput: {
        fontFamily: "Montserrat-Light",
        fontSize: 20,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#FECA57',
        marginBottom: 30,
        borderRadius: 7,
        backgroundColor: 'white'
    },
    buttonOpacity: {
        backgroundColor: '#FECA57',
        padding: 10,
        borderRadius: 7
    },
    textSignIn: {
        fontFamily: "Montserrat-Medium",
        fontSize: 22,
        textAlign: 'center',
        color: 'white',
        textShadowColor: 'black',
        textShadowRadius: 4
    },
    textForRegistration: {
        fontFamily: "Montserrat-Light",
        fontSize: 18,
        marginTop: 70
    },
    textForRequest: {
        fontFamily: "Montserrat-Light",
        fontSize: 18,
        marginTop: 20
    }
})

export {LoginPageStyle}