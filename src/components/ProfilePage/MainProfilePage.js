import React from 'react'
import { useNavigation } from '@react-navigation/core';
import { Text, TouchableOpacity, View } from 'react-native'
import {connect, useDispatch} from 'react-redux'
import { StyleMainProfilePage } from './StyleMainProfilePage'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { ActionIsLoggedIn } from '../../store/actions/ActionIsLoggedIn';

export default MainProfilePage = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch()
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
                    <TouchableOpacity 
                        style = {StyleMainProfilePage.components}
                        onPress = {() => {
                            navigation.navigate('Statistic')
                        }}>
                        <MaterialCommunityIcons name = 'podium' color = {"#FECA57"} size={30}/>
                        <Text style = {StyleMainProfilePage.textComponents}>Моя статистика</Text>
                    </TouchableOpacity>
                </View>

                <View style = {StyleMainProfilePage.viewComp}>
                    <TouchableOpacity
                        style = {StyleMainProfilePage.components}
                        onPress = {() => {
                            dispatch(ActionIsLoggedIn(false))
                        }}
                    >
                        <MaterialCommunityIcons name = 'exit-to-app' color = {"#FECA57"} size={30}/>
                        <Text style = {StyleMainProfilePage.textComponents}>Выход</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    
}
