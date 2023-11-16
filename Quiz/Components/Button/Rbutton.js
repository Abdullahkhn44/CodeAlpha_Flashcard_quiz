import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const RButton = ({style, text, press, butnText}) => {
  return (
    
    <TouchableOpacity style={[styles.butn, style]} onPress={press}>
      <Text style={styles.butnText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  butn: {
    backgroundColor:'#FF5733',
    padding: 10,
    borderRadius: 5,
    alignContent:'center',
    width:200,
    justifyContent:'center'

  },
  butnText:{
    color: 'white',
    fontSize: 16,
    textAlign:'center',
    fontWeight:'500'
  }
});

export default RButton;
