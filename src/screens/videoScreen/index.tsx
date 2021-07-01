import React from 'react';
import { View, Text, } from 'react-native';
import { Video } from 'expo-av';

import { styles } from './styles'

export function videoScreen() {
    const videoURL = "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
    return (
        <View style={styles.container}>
                <Text style={styles.title}>Video.mp4</Text>
                    <Video 
                        style={styles.video}
                        source={{ uri: videoURL }}
                        useNativeControls
                        resizeMode="contain"
                    />
     
        </View>
    )
}