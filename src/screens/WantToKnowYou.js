import React from 'react';
import {View, Text, ImageBackground, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import AtomicLogo from '../components/Logo/AtomicLogo';
import {Container, CustomImage, TextCustom} from './styled';
import KnowYouTitle from '../components/Titles/KnowYouTitle';
import { KnowText } from '../components/Titles/styled';
import CustomInput from '../helpers/CustomInput/CustomInput';
import SendButton from '../helpers/Buttons/CustomButton/SendButton'
import {Footer} from '../components/Footer/Footer';
import { InfoTitle } from '../components/Titles/InfoTitle';

export default function WantToKnowYou() {
  return (
    <Container>
    <ImageBackground source={require('../assets/PaqueteAtomic/MaskGroup1.png')}resizeMode="cover"style={{flex: 1, marginLeft: -10, marginTop: -50}}>
     <SafeAreaView>
       <AtomicLogo />
      <KnowYouTitle />
       <InfoTitle text1={ 'Queremos saber que eres tú por favor ingresa los siguientes datos:' }/>
      <TextCustom> Nombre(s) </TextCustom>
      <CustomInput InputText={'Nombre(s)'}placeholder="Ingresa nombre(s): ej. Luis Fernando" />
      <TextCustom> Apellido(s) </TextCustom>
      <CustomInput placeholder="Ingresa apellido: ej. Gómez Hinojosa"/>
       <SendButton />
       <CustomImage height={'500px'} width={'100%'} source={require('../assets/PaqueteAtomic/astronauta2.png')} />
      </SafeAreaView>
  </ImageBackground> 
  <Footer />
  </Container>   
  );
}
