import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';
import { videoScreen } from '../screens/videoScreen';
import { Describe } from '../screens/Describe';


const { Navigator, Screen } = createStackNavigator();
export function Routes() {
    return (
        <NavigationContainer>
            <Navigator headerMode='none'>
                <Screen name="Home" component={Home} />
                <Screen name='SignIn' component={SignIn}/>
                <Screen name="VideoScreen" component={videoScreen} />
                <Screen name="Describe" component={Describe} />
            </Navigator>
        </NavigationContainer>
    )
}