import {StyleSheet} from 'react-native'

const ReviewsAndWorkTimeStyle = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginTop: 10,
    },
    childContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: -10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: '#FECA57',
        justifyContent: 'center',
        elevation: 3,
        borderRadius: 15,
        width: 300,
    },
    textStyle: {
        fontFamily: "Montserrat-Light",
        textAlign: 'center',
        fontSize: 17,
    }
})

export {ReviewsAndWorkTimeStyle}
