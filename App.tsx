import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import styles from './src/styles';
import Round from './src/round';
import Data from './src/Data';
import MovingImage from './src/MovingImage';

export default function App() {  
  var { x, y, z } = Data();

  return (
    <ImageBackground  source={require("./assets/pacman-background.jpg")} style={styles.container}>
      <View style={styles.overlay}>
        <Text style={styles.header1}>Accelerometer</Text> 
        <Text style={styles.text}>(in G's where 1 G = 9.81 m/s^2)</Text>
        <Text style={styles.header2}>x: {Round(x,2)}</Text>
        <Text style={styles.header2}>y: {Round(y,2)}</Text>
        <Text style={styles.header2}>z: {Round(z,2)}</Text>
        <MovingImage x = {x} y = {y}></MovingImage> 
      </View>
    </ImageBackground>
  );
}
