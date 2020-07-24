import React from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";
import Screen from "../components/Screen";
import {AppFormField, AppForm, SubmitButton} from "../components/forms";


const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
});

export default function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppForm
      initialValues={{email: "", password: ""}}
      onSubmit={values => console.log(values)}
      validationSchema={validationSchema}>
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
            <SubmitButton title="Login" color="primary"/>
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
