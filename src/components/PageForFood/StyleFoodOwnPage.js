import {StyleSheet} from 'react-native'

const StyleFoodOwnPage = StyleSheet.create({
    pictureFood: {
        aspectRatio: 1,
        flex: 1,
        resizeMode: 'cover',
    },
    descriptionFood: {
        fontFamily: 'Montserrat-Light',
        fontSize: 18,
        paddingHorizontal: 12,
        paddingVertical: 5,
    },
    nameDish: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 22,
        paddingHorizontal: 12,
        letterSpacing: 1
    },
    hiddenTxt: {
        fontSize: 0
    },
    BottomView: {
        //display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonsChange: {
        backgroundColor: '#FECA57',
        width: 50,
        height: 50,
        borderRadius: 10
    },
    buttonsText: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 30,
        textAlign: 'center',
    },
    buttonAdd: {
        backgroundColor: '#FECA57',
        padding: 13,
        borderRadius: 10
    },
    bottomText: {
        fontFamily: 'Montserrat-Light',
        fontSize: 16
    }
})

export {StyleFoodOwnPage}