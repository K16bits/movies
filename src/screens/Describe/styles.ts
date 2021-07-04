import { StyleSheet } from 'react-native'
import { theme } from '../../theme/theme'

import {getStatusBarHeight} from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.color.background,
        marginTop: getStatusBarHeight()+5,
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: getStatusBarHeight()+5,
    },
    image: {
        width: 300,
        height: 300,
    },
    contentText: {
        padding: 5,
        justifyContent: 'center',
        backgroundColor:'#545454',
    },
    text: {
        color: 'white',
        fontFamily: theme.fonts.subtitle,
        fontSize: 16,
    }
})