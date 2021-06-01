import {StyleSheet} from 'react-native'

const RestaurantsListStyle = StyleSheet.create({
    firview: {
        flex: 1,
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: 'white',
        marginVertical: 6,
        marginHorizontal: 10,
        borderRadius: 20,
        shadowColor: "#000000",
        elevation: 10,
    },
    namerest: {
        fontSize: 23,
        color: '#000000',
        marginLeft: 10,
        fontFamily: "Montserrat-Medium",
    },
    images: {
        width: 130,
        height: 130,
        borderRadius: 20,
        flex: 1,
        marginLeft: -30
    },
    ratin: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        marginTop: 5,
    },
    descr: {
        display: 'flex',
        flexDirection: 'row',
        borderWidth: 3,
        borderColor: '#31B9CC',
        textAlign: 'left',
        marginLeft: 10,
        marginTop: 60,
        marginRight: 5,
        borderRadius: 30,
        padding: 5,
    },
    worktm: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontFamily: "Montserrat-Light",
        fontSize: 13,
    },
    ratingcontainer: {
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'row',
        width: 55,
        height: 27,
        // marginLeft: 170,
        // marginBottom: -20,
        marginTop: 7,
        zIndex: 1,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#31B9CC',
    },
    
  });

  export {RestaurantsListStyle}
