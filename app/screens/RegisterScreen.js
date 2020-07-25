import React from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";
import Screen from "../components/Screen";
import { AppFormField, AppForm, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
});

export default function RegisterScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCorrect={false}
          name="name"
          placeholder="Name"
          icon="account"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          name="email"
          icon="email"
          placeholder="Email"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <AppFormField
          placeholder="Password"
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          textContentType="password"
        />
        <SubmitButton title="Register" color="secondary" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  }
});
