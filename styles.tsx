import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    text: {
      fontFamily: 'serif',
      color: '#aaa',
      fontSize: 18,
      textAlign: 'center',
    },
    header1: {
      fontFamily: 'serif',
      textAlign: 'center',
      fontSize: 42,
      color: '#fff',
    },
    header2: {
      fontFamily: 'serif',
      marginTop: 15,
      textAlign: 'center',
      fontSize: 22,
      color: '#fff',
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      resizeMode: "cover",
      justifyContent: 'center',
    },
    overlay:{
      marginTop: 45,
      paddingHorizontal: 10,
      backgroundColor:"#000000c0",
      height:"100%",
      width:"100%"
    },
  });
  export default styles;