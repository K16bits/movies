import React from 'react';
import { View, Text,TouchableOpacity} from 'react-native';
import { Video } from 'expo-av';
import { useState } from 'react';

import { styles } from './styles'
import { 
    SimpleLineIcons,
    FontAwesome,
    Feather,
} from '@expo/vector-icons'

export function videoScreen() {
    const videoURL = "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
    const [volume,setVolume] = useState(0.7);
    const [playState,setPlayState] = useState(false);

    function handlePlay(){
        setPlayState(!playState)
    }

    function handleVolumePlus(){
        if(volume !== 1.0){
            const valor = Number((volume+0.1).toFixed(2))
            setVolume(valor)
        }
        console.log(volume)
    }

    function handleVolumeSub(){
        if(volume !== 0.0){
            const valor = Number((volume-0.1).toFixed(2))
            setVolume(valor)
            }
        console.log(volume)
    }

    return (
        <View style={styles.container}>
            <View style={styles.videoContainer}>
            <Text style={styles.title}>Video.mp4</Text>
                <Video
                    style={styles.video}
                    resizeMode='contain'
                    source={{ uri: videoURL }}
                    shouldPlay={playState}
                    volume={volume}
                    />
            </View>
            <View style={styles.buttonsContainer}>
                    <TouchableOpacity onPress={()=>{
                        handlePlay()
                    }}>
                        {
                            playState?
                            <SimpleLineIcons name='control-pause' style={styles.icon}/>
                            :<FontAwesome name='play' style={styles.icon} />
                        }
                        
                    </TouchableOpacity>
                    {
                        volume == 0.0 ?
                        <Feather name="volume-x" style={styles.icon}/>
                        :
                        <TouchableOpacity onPress={()=>{
                            console.log('menos')
                            handleVolumeSub()
                        }}>
                            <SimpleLineIcons 
                                name='volume-1'
                                style={styles.icon}
                                />
                        </TouchableOpacity>
                    }
                    <TouchableOpacity onPress={()=>{
                        handleVolumePlus()
                    }}>
                        <SimpleLineIcons 
                            name='volume-2'
                            style={styles.icon}
                            />
                    </TouchableOpacity>
            </View>
        </View>
        
    )
}