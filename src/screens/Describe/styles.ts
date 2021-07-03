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
    contentText: {
        width: "90%",
        padding: 5,
        borderWidth: 1,
        borderColor: 'red',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontFamily: theme.fonts.subtitle,
        fontSize: 18,
    }
})