import React from 'react';
import { Image} from 'react-native';
import {FlatList, FlatListProps} from 'react-native';
import { styles } from './styles';

type DataFilm = {
    id: string;
    poster:String
}


export default function Carousel({films}) {
    return(
        <FlatList
            data={films}
            style={styles.container}
            horizontal
            keyExtractor={(item)=> item.id}
            renderItem={(item)=>(
                <Image
                    source={{uri:item.item.poster}}
                    style={styles.poster}
                    resizeMode='stretch'
                />
            )}
        />
    )
}