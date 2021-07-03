import { Dimensions, StyleSheet } from 'react-native'
import {getStatusBarHeight} from 'react-native-iphone-x-helper'
import { theme } from '../../theme/theme'
const { height,width } = Dimensions.get('screen');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.color.background,
    },
    posterContainer: {
        width: '100%',
        height: height/2,
        marginBottom:10,
    },
})