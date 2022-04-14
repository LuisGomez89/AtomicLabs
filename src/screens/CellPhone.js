import React from 'react';
import {View, Text, ImageBackground, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import AtomicLogo from '../components/Logo/AtomicLogo';
import {Container, CustomImage} from './styled';
import { KnowText } from '../components/Titles/styled';
import CustomInput from '../helpers/CustomInput/CustomInput';
import SendButton from '../helpers/Buttons/CustomButton/SendButton';
import CellPhoneTitle from '../components/Titles/CellPhoneTitle';
import {Footer} from '../components/Footer/Footer';
import { InfoTitle } from '../components/Titles/InfoTitle';

export default function CellPhone() {
  return (
    <Container>
    <ImageBackground source={require('../assets/PaqueteAtomic/MaskGroup1.png')}resizeMode="cover"style={{flex: 1, marginLeft: -10, marginTop: -50}}>
     <SafeAreaView>
       <AtomicLogo />
       <CellPhoneTitle />
       <InfoTitle text1={'Necesitamos validar tu número para continuar'}
            text2={'Ingresa tu número a 10 dígitos y te enviaremos un código SMS.'}/> 
      <CustomInput InputText={'Nombre(s)'}placeholder="Ingresa número ej. 3121405004" />
       <SendButton />
       <CustomImage marginTop={'2%'} height={'550px'}width={'100%'}source={require('../assets/PaqueteAtomic/astronauta3.png')}/>
      </SafeAreaView>
  </ImageBackground> 
  <Footer />
  </Container>   
  );
}
