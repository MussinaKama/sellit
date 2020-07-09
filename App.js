
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import Card from "./app/components/Card";

export default function App() {
 
  return (
      <View style={{backgroundColor: "#f8f4f4", padding: 20, paddingTop: 100}}>
        <Card title="Camera" subtitle="$600" image={require("./app/assets/camera.jpg")}/>
      </View>
  );
}
