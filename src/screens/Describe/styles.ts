import { StyleSheet } from 'react-native'
import { theme } from '../../theme/theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.color.background,
    },
    content: {

        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 300,
        height: 300,
    },
    text:{
        color: 'white',
        fontFamily:theme.fonts.title,
    }
})