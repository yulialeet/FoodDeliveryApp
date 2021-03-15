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
        width: 120,
        height: 120,
        borderRadius: 20,
        flex: 2,
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
        marginRight: 40,
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
        alignItems: 'center',
        width: 55,
        marginLeft: 170,
        marginBottom: -20,
        marginTop: -25,
        zIndex: 1,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#31B9CC',
    },
    
  });

  export {RestaurantsListStyle}
