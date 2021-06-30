import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../pages/Home';
import { SignIn } from '../pages/SignIn';


const { Navigator, Screen } = createStackNavigator();
export function Routes() {
    return (
        <NavigationContainer>
            <Navigator headerMode='none'>
                {/* <Screen name='SignIn' component={SignIn}/> */}
                <Screen name="Home" component={Home} />
            </Navigator>
        </NavigationContainer>
    )
}