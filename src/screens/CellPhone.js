import React, {useState} from 'react';
import {View, Text, ImageBackground, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import AtomicLogo from '../components/Logo/AtomicLogo';
import {Container, CustomImage, TextCustom} from './styled';
import CustomInput from '../helpers/CustomInput/CustomInput';
import CellPhoneTitle from '../components/Titles/CellPhoneTitle';
import {Footer} from '../components/Footer/Footer';
import { InfoTitle } from '../components/Titles/InfoTitle';
import SendButton from '../helpers/Buttons/CustomButton/SendButton';

const [disable, setDisable] = useState(false)

export default function CellPhone({navigation}) {
  return (
    <Container>
    <ImageBackground source={require('../assets/PaqueteAtomic/MaskGroup1.png')}resizeMode="cover"style={{flex: 1, marginLeft: -10, marginTop: -50}}>
     <SafeAreaView>
       <AtomicLogo />
       <CellPhoneTitle />
       <InfoTitle 
          text1={'Necesitamos validar tu número para continuar'}
          text2={'Ingresa tu número a 10 dígitos y te enviaremos un código SMS.'}
        />
      <CustomInput placeholder="Ingresa número ej. 3121405004" title={"Numero de celular"} />
      <SendButton path="FinalScreen" navigation={navigation} disabled={disable} text="Continuar"/>
       <CustomImage marginTop={'20px'} height={'550px'}width={'100%'}source={require('../assets/PaqueteAtomic/astronauta3.png')}/>
      </SafeAreaView>
  </ImageBackground> 
  <Footer />
  </Container>   
  );
}
