import React from 'react';
import { useEffect, useState } from 'react';
import { View, Image, ScrollView } from 'react-native';

import { styles } from './styles';
import { api } from '../../services/api';
import Carousel from '../../components/carousels'

const { API_URL } = process.env;

export function Home() {
    const [filmsData, setFilmesData] = useState('')
    const [serieData, setSerieData] = useState('')

    async function getMovies() {
        const responseMovies = await api.get(`trending/movie/week?api_key=${API_URL}`)
        setFilmesData(responseMovies.data.results)
        const responseTv = await api.get(`trending/tv/week?api_key=${API_URL}`)
        setSerieData(responseTv.data.results)
    }

    useEffect(() => {
        getMovies()
    }
        , [])
    const posterURL = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9Xh4fYbcABTsF4cqPzMkD5QSv1z.jpg"
    return (
        <ScrollView style={styles.container}>
            <View style={styles.posterContainer}>
                <Image
                    source={{ uri: posterURL }}
                    style={styles.posterContainer}
                    resizeMode='contain'
                />
            </View>
            <Carousel objectFilms={filmsData} title="Filmes" />
            <Carousel objectFilms={serieData} title="Series" />
        </ScrollView>
    )
}


