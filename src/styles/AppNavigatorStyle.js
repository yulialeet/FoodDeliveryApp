import { StyleSheet} from 'react-native';


const AppNavigatorStyle = StyleSheet.create({
    focus: {
        shadowOpacity: 1,
        textShadowRadius: 4,
        textShadowOffset: { width: 1, height: 1 }
    },
    notfocus: {
        shadowOpacity: 0,
        textShadowRadius: 0,
        textShadowOffset: { width: 0, height: 0 }
    },
})

export {AppNavigatorStyle};