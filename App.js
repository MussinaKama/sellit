
import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import Card from "./app/components/Card";
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from './app/components/AppTextInput';
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";

const categories = [
  {label: "Electronics", value: 1},
  {label: "Furniture", value: 2},
  {label: "Clothing", value: 3},
]

export default function App() {
  return (
    <LoginScreen/>
  
  )
}
