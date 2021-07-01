import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';
import { videoScreen } from '../screens/videoScreen';


const { Navigator, Screen } = createStackNavigator();
export function Routes() {
    return (
        <NavigationContainer>
            <Navigator headerMode='none'>
                <Screen name="Home" component={Home} />
                <Screen name='SignIn' component={SignIn}/>
                <Screen name="VideoScreen" component={videoScreen} />
            </Navigator>
        </NavigationContainer>
    )
}