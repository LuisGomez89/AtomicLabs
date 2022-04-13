import React from 'react';
import {Text, View, Break} from 'react-native';
import {CustomImage} from '../../screens/styled';
import {TeamText, AlineTeam} from './styled';

export default function TeamImage() {
  return (
    <View>
      <CustomImage
        height={'100px'}
        width={'380px'}
        marginTop={'20px'}
        source={require('../../assets/PaqueteAtomic/Team.png')}
      />
      <AlineTeam  horizontal = {true}>
        <TeamText size={'11px'}>Contratación {'\n'} remota</TeamText>
        <CustomImage  horizontal = {true} source={require('../../assets/PaqueteAtomic/arrow.png')} marginTop={'3%'}
          height={'12px'}
          width={'20px'}
          marginLeft={'1%'}/>
           <TeamText size={'11px'} marginLeft={'-10%'}>Entrevistas con {'\n'} el área de RH</TeamText>
           <CustomImage  horizontal = {true} source={require('../../assets/PaqueteAtomic/arrow.png')} marginTop={'3%'}
          height={'12px'}
          width={'20px'}
          marginLeft={'1%'}/>
          <TeamText size={'11px'} marginLeft={'-10%'}>Prueba {'\n'} práctica</TeamText>
           <CustomImage  horizontal = {true} source={require('../../assets/PaqueteAtomic/arrow.png')} marginTop={'3%'}
          height={'12px'}
          width={'20px'}
          marginLeft={'1%'}/>
          <TeamText size={'11px'} marginLeft={'-10%'}>Entrevista {'\n'} técnica</TeamText>
      </AlineTeam>
    </View>
  );
}
