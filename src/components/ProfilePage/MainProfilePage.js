import React from 'react'
import { useNavigation } from '@react-navigation/core';
import { Text, TouchableOpacity, View } from 'react-native'
import {connect} from 'react-redux'
import { StyleMainProfilePage } from './StyleMainProfilePage'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default MainProfilePage = () => {
    const navigation = useNavigation();
        return (
            <View style = {{flex: 1}}>
                <View style = {StyleMainProfilePage.viewComp}>
                    <TouchableOpacity 
                        style = {StyleMainProfilePage.components}
                        onPress = {() => {
                            navigation.navigate('MyOrders')
                        }}
                    >
                        <MaterialCommunityIcons name = 'animation-outline' color = {"#FECA57"} size={30}/>
                        <Text style = {StyleMainProfilePage.textComponents}>Мои заказы</Text>
                    </TouchableOpacity>
                </View>
                <View style = {StyleMainProfilePage.viewComp}>
                    <TouchableOpacity 
                        style = {StyleMainProfilePage.components}
                        onPress = {() => {
                            navigation.navigate('DeliveryAddress')
                        }}>
                        <MaterialCommunityIcons name = 'map-marker-outline' color = {"#FECA57"} size={30} />
                        <Text style = {StyleMainProfilePage.textComponents}>Изменить адрес доставки</Text>
                    </TouchableOpacity>
                </View>
                <View style = {StyleMainProfilePage.viewComp}>
                    <TouchableOpacity style = {StyleMainProfilePage.components}>
                        <MaterialCommunityIcons name = 'podium' color = {"#FECA57"} size={30}/>
                        <Text style = {StyleMainProfilePage.textComponents}>Моя статистика</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    
}