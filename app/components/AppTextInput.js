import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import {MaterialCommunityIcons} from "@expo/vector-icons";
import colors from '../config/colors';
import defaultStyles from "../config/styles";

export default function AppTextInput({icon, ...otherProps}) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.grey} style={styles.icon}/>}
            <TextInput placeholderTextColor={colors.grey} style={defaultStyles.text} {...otherProps}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 15,
        marginVertical: 20
    },
    icon: {
       marginRight: 10 
    }
})
