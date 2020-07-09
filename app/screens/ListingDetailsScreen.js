import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

export default function ListingDetailsScreen() {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/camera.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Camera</AppText>
        <AppText style={styles.price}>$600</AppText>
        <View style={styles.userContainer}>
        <ListItem
        image={require("../assets/me.jpg")}
        title="Kamshat Mussina"
        subtitle="5 Listings"
        />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  userContainer: {
    marginVertical: 40
  }
});
