import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from '../screens/MainScreen';
import WantToKnowYou from '../screens/WantToKnowYou';
import CellPhone from '../screens/CellPhone';
import FinalScreen from '../screens/FinalScreen';


const Stack = createNativeStackNavigator();

export const NavigationStack = () => {
    return (
        <Stack.Navigator initialRouteName="Main"screenOptions={{headerShown: false}}>
            <Stack.Screen name="MainScreen" component={MainScreen} />
            <Stack.Screen name="WantToKnowYou" component={WantToKnowYou} />
            <Stack.Screen name="CellPhone" component={CellPhone} />
            <Stack.Screen name="FinalScreen" component={FinalScreen} />
        </Stack.Navigator>
    )
}

