import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { styles } from './styles';
import Carousel from '../../components/carousels'

export function Home() {
    //const posterURL = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/30erzlzIOtOK3k3T3BAl1GiVMP1.jpg"
    const posterURL = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/A50Ngq9lh9aCTGHC6kttrppHNoF.jpg"
    return (
        <ScrollView style={styles.container}>
            <Image
                source={{ uri: posterURL }}
                style={styles.posterContainer}
                resizeMode='stretch'
            />
            <Text style={styles.title}>
                Series
            </Text>
            <Carousel />
            <ScrollView style={{flex:1}}>
                <Text style={styles.title}>
                    Series
                </Text>
                <Carousel />
            </ScrollView>
        </ScrollView>
    )
}