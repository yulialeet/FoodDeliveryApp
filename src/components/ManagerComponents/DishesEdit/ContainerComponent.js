import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import {ContainerComponentStyle} from './ContainerComponentStyle'


const ContainerComponent = () => {



    const navigation = useNavigation();
    return (
        <View style = {ContainerComponentStyle.mainView}>
            <TouchableOpacity
                style = {ContainerComponentStyle.opacity}
                onPress = {() => {
                    navigation.navigate('AddDish')
                }}
            >
                <Text style = {ContainerComponentStyle.defaultText}>Добавить</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style = {ContainerComponentStyle.opacity}
                onPress = {() => {
                    navigation.navigate('DeleteDish')
                }}
            >
                <Text style = {ContainerComponentStyle.defaultText}>Удалить</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ContainerComponent