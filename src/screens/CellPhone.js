import React from 'react';
import {View, Text, ImageBackground, ScrollView} from 'react-native';

export default function CellPhone() {
  return (
    <ImageBackground
    source={require('../assets/PaqueteAtomic/MaskGroup1.png')}
    resizeMode="cover"
    style={{flex: 1, marginLeft: -10, marginTop: -50}}>
  </ImageBackground> 
      
  );
}
