import React from 'react';
import {View, Text, ImageBackground, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'

export default function WantToKnowYou() {
  return (
    <ImageBackground
    source={require('../assets/PaqueteAtomic/MaskGroup1.png')}
    resizeMode="cover"
    style={{flex: 1, marginLeft: -10, marginTop: -50}}>
     <SafeAreaView>
      </SafeAreaView>

  </ImageBackground> 
     
  );
}
