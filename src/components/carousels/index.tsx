import React from 'react';
import { Image} from 'react-native';
import {FlatList} from 'react-native';
import { styles } from './styles';

type Props = {
    id:number;
    poster: string;
}

export default function Carousel() {
    const dados = [
        {
            id:'1',
            poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/30erzlzIOtOK3k3T3BAl1GiVMP1.jpg',
        },
        {
            id:'2',
            poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/30erzlzIOtOK3k3T3BAl1GiVMP1.jpg',
        },
        {
            id:'3',
            poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/30erzlzIOtOK3k3T3BAl1GiVMP1.jpg',
        },
        {
            id:'4',
            poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/30erzlzIOtOK3k3T3BAl1GiVMP1.jpg',
        },
        {
            id:'5',
            poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/30erzlzIOtOK3k3T3BAl1GiVMP1.jpg',
        },
        {
            id:'6',
            poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/30erzlzIOtOK3k3T3BAl1GiVMP1.jpg',
        },
    ]
    return(
        <FlatList
            data={dados}
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