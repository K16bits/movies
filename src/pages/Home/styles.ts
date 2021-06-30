import { Dimensions, StyleSheet } from 'react-native'
import { theme } from '../../theme/theme'
const { height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.color.background
    },
    posterContainer: {
        borderWidth: 1,
        backgroundColor: 'red',
        height: height / 2,
        marginBottom:10,
    },
    title: {
        color: 'white',
        fontFamily: theme.fonts.title,
        fontSize: 32,
        letterSpacing: 1,
        marginLeft:15,
        marginBottom:10,
    }
})