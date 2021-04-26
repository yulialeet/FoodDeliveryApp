import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'


const ContainerComponent = () => {



    const navigation = useNavigation();
    return (
        <View>
            <TouchableOpacity
                onPress = {() => {
                    navigation.navigate('AddDish')
                }}
            >
                <Text>Добавить</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ContainerComponent