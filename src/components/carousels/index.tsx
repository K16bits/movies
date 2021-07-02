import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import { FlatList } from 'react-native';
import { styles } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function Carousel({ films}) {
    const navigate = useNavigation()
    function handleVideo() {
        navigate.navigate('VideoScreen')
    }
    return (
        <FlatList
            data={films}
            style={styles.container}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={(item) => (
                <TouchableOpacity onPress={() => handleVideo()}>
                    <Image
                        source={{ uri: item.item.poster }}
                        style={styles.poster}
                        resizeMode='stretch'
                    />
                </TouchableOpacity>
            )}
        />
    )
}