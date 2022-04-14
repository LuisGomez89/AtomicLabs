import React from 'react';
import {View, Text, ImageBackground, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import AtomicLogo from '../components/Logo/AtomicLogo';
import {Container, CustomImage} from './styled';
import FinalScreenTitle from '../components/Titles/FinalScreenTitle';
import {Footer} from '../components/Footer/Footer';
import { InfoTitle } from '../components/Titles/InfoTitle';

export default function FinalScreen() {
  return (
    <Container>
    <ImageBackground source={require('../assets/PaqueteAtomic/MaskGroup2.png')}resizeMode="cover"style={{flex: 1, marginLeft: -10, marginTop: -50}}>
     <SafeAreaView>
       <AtomicLogo />
       <FinalScreenTitle />
       <InfoTitle text1={'En breve recibirás un correo de confirmación por parte del equipo de AtomicLabs'}
            text2={'Recuerda revisar tu bandeja de SPAM ¡Esperamos verte pronto!'}/> 
       <CustomImage marginTop={'5%'} height={'400px'} width={'88%'} source={require('../assets/PaqueteAtomic/astronauta4.png')}/>
      </SafeAreaView>
  </ImageBackground> 
  <Footer />
  </Container>   
  );
}