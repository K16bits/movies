import React from 'react';
import { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { View, Text, Image } from 'react-native';

import { api } from '../../services/api';
import { styles } from './styles';

const { API_URL } = process.env;

export function Describe() {
    const router = useRoute()
    const [movieData, setMovieData] = useState('')

    async function getDataID() {
        const { itemID,category } = router.params
        const response = await api.get(`https://api.themoviedb.org/3/${category}/${itemID}?api_key=${API_URL}&language=pt-BR`)
        setMovieData(response.data)
    }

    useEffect(() => {
        getDataID()
    }, [])

    const urlPoster = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movieData.poster_path}`
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image
                    source={{ uri: urlPoster }}
                    style={styles.image}
                    resizeMode='contain'
                />
                <Text style={styles.text}>{movieData.title}</Text>
                <View style={styles.contentText}>
                    <Text style={styles.text}>{movieData.overview}</Text>
                </View>

            </View>

        </View>
    )
}