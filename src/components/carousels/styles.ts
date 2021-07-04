import { StyleSheet } from 'react-native'
import { theme } from '../../theme/theme'
export const styles = StyleSheet.create({
    container:{
        marginBottom:10
    },
    poster:{
        height: 150,
        width: 110,
        marginLeft:10,
        marginEnd:5,
    },
    title: {
        color: 'white',
        fontFamily: theme.fonts.title,
        fontWeight:'bold',
        fontSize: 32,
        letterSpacing: 1,
        margin: 5,
        marginLeft:15,
        marginBottom:10,
    }
})