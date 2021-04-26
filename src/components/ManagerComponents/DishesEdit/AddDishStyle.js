import {StyleSheet} from 'react-native'

const AddDishStyle = StyleSheet.create({
    defaultText: {
        fontFamily: 'Montserrat-Light',
        fontSize: 18
    },
    inputs: {
        borderWidth: 2, 
        borderColor: "#FECA57",
        backgroundColor: 'white',
        marginVertical: 10,
        fontFamily: 'Montserrat-Light',
        fontSize: 18,
    },
    mainView: {
        flex: 1,
        margin: 20
    },
    choosePhoto: {
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: "#FECA57",
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 20,
        height: 40,
        alignSelf: 'center'
        
    },
    buttonSend: {
        alignSelf: 'center',
        marginVertical: 30,
        borderRadius: 15,
        paddingHorizontal: 70,
        paddingVertical: 10,
        backgroundColor: '#31B9CC'
    }
})

export {AddDishStyle}

