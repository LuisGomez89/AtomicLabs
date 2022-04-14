import React from 'react';
import {View, Text, ImageBackground, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import AtomicLogo from '../components/Logo/AtomicLogo';
import {Container, CustomImage, TextCustom} from './styled';
import { KnowText } from '../components/Titles/styled';
import CustomInput from '../helpers/CustomInput/CustomInput';
import ContinueButton from '../helpers/Buttons/CustomButton/ContinueButton';
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
      <TextCustom>Número de celular</TextCustom>       
      <CustomInput InputText={'Nombre(s)'}placeholder="Ingresa número ej. 3121405004" />
       <ContinueButton />
       <CustomImage marginTop={'-67px'} height={'550px'}width={'100%'}source={require('../assets/PaqueteAtomic/astronauta3.png')}/>
      </SafeAreaView>
  </ImageBackground> 
  <Footer />
  </Container>   
  );
}
