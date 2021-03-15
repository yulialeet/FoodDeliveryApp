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
        justifyContent: 'space-between',
        marginHorizontal: -10,
        paddingVertical: 2,
        paddingHorizontal: 10,
        backgroundColor: '#31B9CC',
        elevation: 3,
        borderRadius: 10,
        alignItems: 'center',
        width: 140,
    },
    textStyle: {
        fontFamily: "Montserrat-Regular",
        fontSize: 17,
        alignSelf: 'flex-end'
    }
})

export {ReviewsAndWorkTimeStyle}
