
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import LoginPage from './LoginPage';

export default ClassToCallLoginPage = (props) => {
    const navigation = useNavigation();
    
    return (
            <LoginPage navigation = {navigation}/>
    )
}