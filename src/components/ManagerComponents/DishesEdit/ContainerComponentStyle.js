import {StyleSheet} from 'react-native'

const ContainerComponentStyle = StyleSheet.create({
    mainView: {
        flex: 1,
        marginHorizontal: 15,
        justifyContent: 'center',
        //alignItems: 'center'
    },
    defaultText: {
        fontFamily: 'Montserrat-Light',
        fontSize: 25,
        textAlign: 'center'
    },
    opacity: {
        borderWidth: 3,
        padding: 10,
        marginVertical: 15,
        borderRadius: 15,
        borderColor: "#FECA57",
        backgroundColor: 'white'
    }
})

export {ContainerComponentStyle}