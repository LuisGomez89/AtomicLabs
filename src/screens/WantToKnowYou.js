import React from 'react';
import {View, Text, ImageBackground, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import AtomicLogo from '../components/Logo/AtomicLogo';
import {Container, CustomImage} from './styled';
import KnowYou from '../components/Titles/KnowYou';
import { KnowText } from '../components/Titles/styled';
import CustomInput from '../helpers/CustomInput/CustomInput';
import SendButton from '../helpers/Buttons/CustomButton/SendButton';

import {Footer} from '../components/Footer/Footer';

export default function WantToKnowYou() {
  return (
    <Container>
    <ImageBackground
    source={require('../assets/PaqueteAtomic/MaskGroup1.png')}
    resizeMode="cover"
    style={{flex: 1, marginLeft: -10, marginTop: -50}}>
     <SafeAreaView>
       <AtomicLogo />
      <KnowYou />
      
     <KnowText 
      text={'Queremos saber que eres tú por favor ingresa los siguientes datos:'} /> 
      <CustomInput  
        InputText={'Nombre(s)'}
        placeholder="Ingresa nombre(s): ej. Luis Fernando" />
      <CustomInput 
       placeholder="Ingresa apellido: ej. Gómez Hinojosa"/>
       <SendButton />
       <CustomImage
            height={'500px'}
            width={'100%'}
            source={require('../assets/PaqueteAtomic/astronauta2.png')}
          />
      
      </SafeAreaView>

  </ImageBackground> 
  <Footer />
  </Container>   
  );
}
