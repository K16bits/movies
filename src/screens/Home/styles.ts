import { Dimensions, StyleSheet } from 'react-native'
import { theme } from '../../theme/theme'
const { height,width } = Dimensions.get('screen');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.color.background
    },
    posterContainer: {
        width: width,
        height: height/2,
        marginBottom:10,
    },
})