import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import colors from '../config/colors';

function AppButton({title, onPress}) {
    return (
        <TouchableOpacity  style={styles.loginButton} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    loginButton: {
        width: "100%",
        borderRadius: 25,
        backgroundColor: colors.primary,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
    },
    text: {
        color: colors.white,
        fontSize: 18,
        textTransform: "uppercase",
        fontWeight: "bold"

    },
})

export default AppButton;