import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../../screens/MainScreen';
import WantToKnowYou from '../../screens/WantToKnowYou';
import CellPhone from '../../screens/CellPhone';


const Stack = createStackNavigator();

export default function NavigationStack () {
    return (
        <Stack.Navigator initialRouteName="KnowYou"
        screenOptions={{headerShown: false}}>
            <Stack.Screen name="Main" component={MainScreen} />
            <Stack.Screen name="KnowYou" component={WantToKnowYou} />
            <Stack.Screen name="Phone" component={CellPhone} />
        </Stack.Navigator>
    )
}

