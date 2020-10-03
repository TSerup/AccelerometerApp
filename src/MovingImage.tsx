import React from 'react';
import { Image, Dimensions } from 'react-native';
import Round from './round';

const MovingImage = ({x, y}:any) =>{
  // Get the dimensions of the screen
  let windowWidth = Dimensions.get('window').width;
  let windowHeight = Dimensions.get('window').height;
  return(
    <Image 
      style={{
        width: 80, 
        height: 80,
        marginLeft: ((windowWidth/2)-45) - (Number(Round(x,4))*windowWidth/2),
        marginTop: ((windowHeight/2)-240) + (Number(Round(y,4))*windowHeight/2),}}
      source={require('../assets/PacManGhost.png')}>
    </Image>
  );
}

export default MovingImage;
