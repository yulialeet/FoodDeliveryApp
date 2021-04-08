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
    },
    emptyBox: {
        fontFamily: "Montserrat-Light",
        textAlign: 'center',
        fontSize: 23,
        color: '#ABABAB'
    },
    TextToAdd: {
        fontFamily: "Montserrat-Light",
        fontSize: 18
    },
    AddReviewMainView: {
        borderWidth: 2,
        borderColor: "#FECA57",
        marginBottom: 20
    },
    buttonAdd: {
        backgroundColor: '#FECA57',
        alignSelf: 'flex-end',
        paddingVertical: 8,
        paddingHorizontal: 30,
        marginVertical: 7,
        borderRadius: 15
    },
    textButtonAdd: {
        fontFamily: "Montserrat-Regular",
        fontSize: 16
    }
}) 

export {StyleReviews}

