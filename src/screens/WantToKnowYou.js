import React, {useState} from 'react';
import {ImageBackground} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import AtomicLogo from '../components/Logo/AtomicLogo';
import {Container, CustomImage} from './styled';
import KnowYouTitle from '../components/Titles/KnowYouTitle';
import CustomInput from '../helpers/CustomInput/CustomInput';
import SendButton from '../helpers/Buttons/CustomButton/SendButton'
import {Footer} from '../components/Footer/Footer';
import { InfoTitle } from '../components/Titles/InfoTitle';

export default function WantToKnowYou({navigation}) {

  const [name, setName] = useState(false)
  const [nameText, setNameText] = useState('')
  const [lastName, setLastName] = useState(false)
  const [lastNameText, setLastNameText] = useState('')
  const [disable, setDisable] = useState(true)
  
  const handleName = text => {
    if(text.length >= 5) {
      setName(true);
      setNameText(text);
    }
  }

  const handleDisable = text => {
    if(text.length >= 5) {
      setLastName(true)
      setLastNameText(text)
    }
    if(name == true && lastName == true) {
      setDisable(false)
    }
  }
  
  return (
    <Container>
    <ImageBackground source={require('../assets/PaqueteAtomic/MaskGroup1.png')}resizeMode="cover"style={{flex: 1, marginLeft: -10, marginTop: -50}}>
     <SafeAreaView>
       <AtomicLogo />
      <KnowYouTitle />
       <InfoTitle text1={ 'Queremos saber que eres tú por favor ingresa los siguientes datos:' }/>
      <CustomInput placeholder="Ingresa nombre(s): ej. Luis Fernando" label="El nombre debe tener mínimo 5 caractéres " title="Nombre(s)" handleChange={handleName} validation={name}/>
      <CustomInput placeholder="Ingresa apellido: ej. Gómez Hinojosa" label="Los apellidos deben tener mínimo 5 caractéres" title="Apellido(s)" handleChange={handleDisable} validation={lastName}/>
      <SendButton path="CellPhone" navigation={navigation} disabled={disable} text="Enviar"/>
      <CustomImage height={'500px'} width={'100%'} source={require('../assets/PaqueteAtomic/astronauta2.png')} />
      </SafeAreaView>
  </ImageBackground> 
  <Footer />
  </Container>   
  );
}
