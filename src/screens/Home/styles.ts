import { Dimensions, StyleSheet } from 'react-native'
import {getStatusBarHeight} from 'react-native-iphone-x-helper'
import { theme } from '../../theme/theme'
const { height,width } = Dimensions.get('screen');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.color.background,
        marginTop:getStatusBarHeight()+5
    },
    posterContainer: {
        height: height/2,
    },
})