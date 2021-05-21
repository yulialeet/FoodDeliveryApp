import {StyleSheet} from 'react-native'

const RegistrationPageStyle = StyleSheet.create({
    defaultView: {
        backgroundColor: '#F0F0F0',
        display: 'flex',
        flex: 1,
    },
    viewForInputs: {
        paddingTop: 100,
        marginHorizontal: 20,
    },
    textsOptions: {
        fontFamily: "Montserrat-Light",
        fontSize: 16,
        marginLeft: 5
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
    addressView: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    addressInputs: {
        fontFamily: "Montserrat-Light",
        fontSize: 16,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#FECA57',
        marginBottom: 30,
        borderRadius: 7,
        backgroundColor: 'white',
        width: 97,
        marginHorizontal: 8
    }
})

export {RegistrationPageStyle}