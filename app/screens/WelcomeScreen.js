import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import AppButton from "../components/AppButton";

export default function WelcomeScreen() {
    return (
        <ImageBackground 
        blurRadius={1}
        style={styles.background} 
        source={require('../assets/background.jpg')}>
            <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
            <Text style={styles.tagLine}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.buttonContainer}>
            <AppButton title="Login" color="secondary"/>
            <AppButton title="SignUp" color="primary"/>
            </View>
        </ImageBackground>    
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    buttonContainer:{
        padding: 20,
        width: "100%",
        paddingVertical: 20
    },
    tagLine: {
        fontWeight: "600",
        fontSize: 25,
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
})
