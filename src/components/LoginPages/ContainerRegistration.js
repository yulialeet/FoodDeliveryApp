import { useNavigation } from '@react-navigation/core';
import React from 'react';
import RegistrationPage from './RegistrationPage';

export default ContainerRegistration = () => {
    const navigation = useNavigation();
    
    return (
            <RegistrationPage navigation = {navigation}/>
    )
}