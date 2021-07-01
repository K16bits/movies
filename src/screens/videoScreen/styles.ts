import {StyleSheet,Dimensions} from 'react-native';
import { theme } from '../../theme/theme';

const {height} = Dimensions.get('screen')
export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:theme.color.background,
        justifyContent:'center',
        alignItems:'center'
    },
    video:{
        width: '100%',
        height: 200,
    },
    title:{
        fontFamily:theme.fonts.title,
        fontSize:18,
        color: 'white',
    }
})