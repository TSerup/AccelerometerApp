import { useState, useEffect } from 'react';
import { Accelerometer } from 'expo-sensors';

function Data(){
  // State variable for x, y and z value
  const [data, setData] = useState({x: 0, y: 0, z: 0});

  var subscription: any = null;

  useEffect(() => {
    subscribe();
    // Optional cleanup mechanism for effect 
    return function unsubscribe(){
      subscription && subscription.remove();
      subscription = null;
    };
  });

  const subscribe = () => {
    subscription = Accelerometer.addListener(accelerometerData => {
      setData(accelerometerData);
      Accelerometer.setUpdateInterval(30);
    });
  };
    return data;
}
export default Data;