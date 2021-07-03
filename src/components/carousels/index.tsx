import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, Text } from 'react-native';
import { FlatList } from 'react-native';
import { styles } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';



export default function Carousel({ objectFilms, title,category}) {
    const navigate = useNavigation()
    function handleVideo(itemID:string) {
        navigate.navigate('Describe',{itemID,category})
    }
    return (
        <>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                data={objectFilms}
                style={styles.container}
                horizontal
                keyExtractor={(item,index) => `${index}`}
                renderItem={(item) => {
                    const urlPost = `https://image.tmdb.org/t/p/w500/${item.item.poster_path}`
                    return (
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => handleVideo(item.item.id)}>
                            <Image
                                source={{ uri: urlPost }}
                                style={styles.poster}
                                resizeMode='stretch'
                            />
                        </TouchableOpacity>
                    )
                }
                }
            />
        </>
    )
}

