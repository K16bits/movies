import React from 'react'
import { Text,View,TextInput } from 'react-native'
import {styles} from './styles'

export function SignIn(){
    return(
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>Login</Text>
                <View style={styles.form}>
                    <TextInput style={styles.input}  placeholder='Email' />
                    <TextInput style={styles.input}  placeholder='Senha' secureTextEntry/>
                </View>
            </View>
        </View>
    )
}