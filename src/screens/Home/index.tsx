import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { styles } from './styles';
import Carousel from '../../components/carousels'
import { films } from '../../utils/films'
import { series } from '../../utils/series';

export function Home() {
    
    //const posterURL = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/30erzlzIOtOK3k3T3BAl1GiVMP1.jpg"
    const posterURL = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/A50Ngq9lh9aCTGHC6kttrppHNoF.jpg"
    return (
        <ScrollView style={styles.container}>
            <View style={styles.posterContainer}>
                <Image
                    source={{ uri: posterURL }}
                    style={styles.posterContainer}
                    resizeMode='contain'
                />
            </View>
            <Text style={styles.title}>Filmes</Text>
            <Carousel films={films} />

            <Text style={styles.title}>Series</Text>
            <Carousel films={series} />


        </ScrollView>
    )
}


