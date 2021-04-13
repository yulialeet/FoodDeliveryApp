import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {SafeAreaView} from 'react-native';
import MainPage from './MainPage';

export default MainPageContainer = (props) => {
    const navigation = useNavigation();
    
    return (
        <SafeAreaView style = {{flex: 1}}>
            <MainPage navigation = {navigation}/>
       </SafeAreaView>
    )
}




