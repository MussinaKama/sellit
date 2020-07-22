import React from "react";
import { StyleSheet, Text, View, Image, TouchableHighlight, ImageComponent } from "react-native";
import AppText from "../components/AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";
import colors from "../config/colors";

export default function ListItem({ title, subtitle, image, IconComponent, onPress, renderRightActions }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
    <TouchableHighlight 
    underlayColor={colors.light}
    onPress={onPress}>
    <View style={styles.container}>
      {IconComponent}
      {image && <Image style={styles.image} source={image} />}
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        {subtitle && <AppText style={styles.subtitle}>{subtitle}</AppText>}
      </View>
    </View>
    </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20
  },
  subtitle: {
    color: colors.grey
  }
});
