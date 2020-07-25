import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Yup from "yup";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  { label: "Furniture", id: 1 },
  { label: "Electronics", id: 2 },
  { label: "Clothing", id: 3 },
];
export default function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
          <AppFormField maxLength={255} name="title" placeholder="Title"/>
          <AppFormField keyboardType="numeric" maxLength={8} name="price" placeholder="Price" />
          <AppFormPicker items={categories} name="category" placeholder="Category"/>
          <AppFormField maxLength={255} name="description" placeholder="Description" multiline numberOfLines={3}/>
          <SubmitButton title="Post" color="primary"/>
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
    container: {
        padding: 15
    }
});
