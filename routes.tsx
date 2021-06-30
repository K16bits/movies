import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './src/pages/Home';


const { Navigator, Screen } = createStackNavigator();
export function Routes() {
    return (
        <NavigationContainer>
            <Navigator headerMode='none'>
                <Screen name="Home" component={Home} />
            </Navigator>
        </NavigationContainer>
    )
}