import {StyleSheet} from 'react-native'

const DeleteDishesStyle = StyleSheet.create({
    componentsView: {
        paddingHorizontal: 18,
        paddingVertical: 10,
        backgroundColor: 'white',
        elevation: 3,
        borderRadius: 15,
        margin: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 10
    },
    defaultText: {
        fontFamily: 'Montserrat-Light',
        fontSize: 18,
    },
    textDel: {
        fontFamily: 'Montserrat-Medium',
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
    },
    viewButton: {
        alignSelf: 'center',
        backgroundColor: '#31B9CC',
        borderRadius: 10,
        maxWidth: 120
    }
});
export {DeleteDishesStyle}