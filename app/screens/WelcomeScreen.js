import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'

export default function WelcomeScreen() {
    return (
        <ImageBackground 
        style={styles.background} 
        source={require('../assets/background.jpg')}>
            <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
            <Text>Sell What You Don't Need</Text>
            </View>
            <View style={styles.loginButton}></View>
            <View style={styles.signUpButton}></View>
        </ImageBackground>
    
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100, 
    },
    logoContainer:{
        position: 'absolute',
        top: 70,
        alignItems: 'center',
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#F08080',
    },
    signUpButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#20B2AA',
    }
})
