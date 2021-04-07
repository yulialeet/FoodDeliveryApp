import {StyleSheet} from 'react-native'

const StyleReviews = StyleSheet.create({
    headerReviews: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 15,
        marginVertical: 15,
        borderBottomColor: '#31B9CC',
        borderBottomWidth: 2
    },
    headerText: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 20
    },
    viewList: {
        padding: 10,
        backgroundColor: 'white',
        marginHorizontal: 10,
        marginVertical: 7,
        borderRadius: 12,
        elevation: 4
    },
    nameAndRating: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10
    },
    rateNum: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    nameRateText: {
        fontFamily: 'Montserrat-Light',
        fontSize: 14
    },
    descriptionView: {
        marginHorizontal: 10,
        marginTop: 6
    },
    descriptionText: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 15
    }
}) 

export {StyleReviews}

