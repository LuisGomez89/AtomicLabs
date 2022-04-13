import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../../screens/MainScreen';

const Stack = createStackNavigator();

export default function NavigationStack () {
    return (
        <Stack.Navigator initialRouteName="Main">
            <Stack.Screen name="Main" component={MainScreen} />
        </Stack.Navigator>
    )
}

