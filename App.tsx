import React, { useState, useEffect } from 'react';
import { StyleSheet, ImageBackground, Text, View, Image, Dimensions } from 'react-native';
import { Accelerometer } from 'expo-sensors';
import styles from './styles';

export default function App() {
  const [data, setData] = useState({});
  var subscription = null;

  useEffect(() => {
    subscribe();
  }, []);

  useEffect(() => {
    return () => {
      unsubscribe();
    };
  }, []);

  const subscribe = () => {
    subscription = Accelerometer.addListener(accelerometerData => {
      setData(accelerometerData);
      Accelerometer.setUpdateInterval(30);
    });
  };

  const unsubscribe = () => {
    subscription && subscription.remove();
    subscription = null;
  };
  // Get the dimensions of the screen
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  
  let { x, y, z } = data;
  return (
    <ImageBackground  source={require("./assets/pacman-background.jpg")} style={styles.container}>
      <View style={styles.overlay}>
        <Text style={styles.header1}>Accelerometer</Text> 
        <Text style={styles.text}>(in G's where 1 G = 9.81 m s^2)</Text>
        <Text style={styles.header2}>x: {round(x)}</Text>
        <Text style={styles.header2}>y: {round(y)}</Text>
        <Text style={styles.header2}>z: {round(z)}</Text> 
        <Image 
        style={{ width: 80, height: 80,
          marginLeft: ((windowWidth/2)-50) - (round(x)*windowWidth/2),
          marginTop: ((windowHeight/2)-240) + (round(y)*windowHeight/2),
        }}
        source={require('./assets/PacManGhost.png')}/>
      </View>
    </ImageBackground>
  );
}

function round(n) {
  if (!n) {
    return 0;
  }
  return (Math.floor(n * 100) / 100).toFixed(2);
}
