import {StyleSheet} from 'react-native'
import { theme } from '../../theme/theme'

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:theme.color.background
    },
    contentContainer:{
        backgroundColor: 'white',
        width: '80%',
        height: '80%',
        alignItems:'center'
    },
    title:{
        fontFamily: theme.fonts.title,
        fontSize:28,
    },
    subtitle:{
        fontFamily: theme.fonts.subtitle,
        fontSize:20,
    },
    input:{
        fontSize:18,
        height: 50,
        width: '80%',
        borderWidth:1,
        borderRadius:8,
        textAlign:'center',
        marginBottom:5,
    },
    form:{
        width: '100%',
        height: '100%',
        alignItems:'center',
        padding: 5,
    }
})