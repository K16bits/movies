import { Dimensions, StyleSheet } from 'react-native'
const {height} = Dimensions.get('screen');

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#000',
    },
    posterContainer:{
        borderWidth:1,
        backgroundColor:'red',
        height:height/2,
    },
    title:{
        color: 'white',
        fontSize:32,
        letterSpacing:1,
    }
})