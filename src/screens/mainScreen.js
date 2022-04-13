import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Container} from './styled';
import Logo from '../components/Logo/Logo';
import PotencialTitle from '../components/Titles/Potencial';
//import {Logo} from '../components/Logo/Logo'

export default function MainScreen() {
  return (
      <ImageBackground
        source={require('../assets/PaqueteAtomic/MaskGroup1.png')}
        resizeMode="cover"
        style={{flex: 1, marginLeft: -10, marginTop: -50}}>
        <SafeAreaView>
          <Logo />
          <PotencialTitle />
        </SafeAreaView>
      </ImageBackground>
  );
}
