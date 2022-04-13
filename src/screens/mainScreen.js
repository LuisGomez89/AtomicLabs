import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Container, CustomImage} from './styled';
import AtomicLogo from '../components/Logo/AtomicLogo';
import PotencialTitle from '../components/Titles/Potencial';
import { TouchableOpacity } from 'react-native';
import {KnowMoreButton} from '../helpers/Buttons/KnowMoreButton/KnowMoreButton';
import CustomButton from '../helpers/Buttons/CustomButton/CustomButton';
import RightArmTitle from '../components/Titles/RightArm';


export default function MainScreen() {
  return (
    <Container>
      <ImageBackground
        source={require('../assets/PaqueteAtomic/MaskGroup1.png')}
        resizeMode="cover"
        style={{flex: -50, marginLeft: -10, marginTop: -60}}>
        <SafeAreaView>
          <AtomicLogo />
          <PotencialTitle />
          <KnowMoreButton />

          <CustomImage
          marginTop={'80px'}
          source={require ('../assets/PaqueteAtomic/astronauta1.png')}
          />
          <CustomButton />
          <RightArmTitle />
        </SafeAreaView>
      </ImageBackground>
    </Container>   
  );
}
