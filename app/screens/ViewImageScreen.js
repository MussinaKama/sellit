import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons"
import colors from "../config/colors";

export default function ViewImageScreen() {
    return (
        <View style={styles.container}>  
        <View style={styles.closeIcon}><MaterialCommunityIcons name="close" color="white" size={40}/></View>
        <View style={styles.deleteIcon}><MaterialCommunityIcons name="trash-can-outline" color="white" size={40}/></View>
        <Image 
        resizeMode="contain" 
        style={styles.image}
        source={require('../assets/chair.jpg')}/>
        </View>
        )
}

const styles = StyleSheet.create({
    closeIcon: {
        
        position: "absolute",
        top: 35,
        left: 25,
    },
    deleteIcon: {
        position: "absolute",
        top: 35,
        right: 25,
    },
    container: {
        backgroundColor: colors.black,
        flex: 1,
    },
    image: {
        width: "100%",
        height: "100%",
    },
})
