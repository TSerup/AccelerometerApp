import React from 'react';
import { ImageBackground, Text, View, Image, Dimensions } from 'react-native';
import styles from './styles';
import Round from './round';
import Data from './Data';

export default function App() {  
// Get the dimensions of the screen
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

  var { x, y, z } = Data();
  return (
    <ImageBackground  source={require("./assets/pacman-background.jpg")} style={styles.container}>
      <View style={styles.overlay}>
        <Text style={styles.header1}>Accelerometer</Text> 
        <Text style={styles.text}>(in G's where 1 G = 9.81 m s^2)</Text>
        <Text style={styles.header2}>x: {Round(x,2)}</Text>
        <Text style={styles.header2}>y: {Round(y,2)}</Text>
        <Text style={styles.header2}>z: {Round(z,2)}</Text>
        <Image 
        style={{
          width: 80, 
          height: 80,
          marginLeft: ((windowWidth/2)-50) - (Number(Round(x,4))*windowWidth/2),
          marginTop: ((windowHeight/2)-240) + (Number(Round(y,4))*windowHeight/2),}}
        source={require('./assets/PacManGhost.png')}/>
      </View>
    </ImageBackground>
  );
}
