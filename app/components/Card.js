import React from "react";
import { StyleSheet, Text, View, Image} from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

export default function Card({ title, subtitle, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.textContainer}>
      <AppText style={styles.title}>{title}</AppText>
      <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
      width: "100%",
      height: 200
  },
  textContainer:{
      padding: 20,
  },
  title: {
      marginBottom: 8
  },
  subtitle:{
      color: colors.secondary,
      fontWeight: "bold",
  }
});
