import {StyleSheet,Dimensions} from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { theme } from '../../theme/theme';

const {height,width} = Dimensions.get('screen')
export const styles = StyleSheet.create({
    container:{
        flex: 1,
        height: height,
        backgroundColor:theme.color.background,
    },
    videoContainer:{
        marginTop:getStatusBarHeight()+25,
        alignItems:'center',
        justifyContent:'center'
    },
    video:{
        width: width,
        height: 250,
    },
    title:{
        fontFamily:theme.fonts.title,
        fontSize:18,
        color: 'white',
    },
    buttonsContainer:{
        flexDirection:'row',
        justifyContent:'center'
    },
    icon:{
        color:'white',
        fontSize:28,
        borderWidth:1,
        borderColor:'white',
        padding: 10,
        marginLeft:10
    },
    footer:{
        position:'absolute',
        bottom: 0,
        marginBottom: 30,
    },
    iconFooter:{
        color:'white',
        fontSize:40,
        padding:5,
        marginLeft:15,
    },
})