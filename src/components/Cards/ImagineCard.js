import React from 'react';
import {View} from 'react-native';
import {Card, DotsImgage, ImageContainer} from './styled';
import {CustomImage} from '../../screens/styled';
import {TitleText} from '../Titles/styled';
import {DetailsCard} from './Details';

export const Imagine = () => {
  return (
    <Card>
      <ImageContainer>
        <CustomImage
          marginTop={'20px'}
          height={'200px'}
          width={'200px'}
          source={require('../../assets/PaqueteAtomic/imagine.png')}
        />
      </ImageContainer>
      <CustomImage
        marginTop={'20px'}
        height={'10px'}
        width={'40%'}
        source={require('../../assets/PaqueteAtomic/Lines.png')}
      />
      <TitleText marginTop={'3%'} marginBottom={'5%'}>
        IMAGINA
      </TitleText>
      <DetailsCard weight1={'700'} text1={'Estrategia '} text2={'digital'} />
      <DetailsCard weight2={'700'} text1={'Big Data & '} text2={'Analisis'} />
      <DetailsCard
        weight1={'600'}
        text1={'Consultoría '}
        text2={'Tecnológica'}
      />
      <DetailsCard
        weight1={'700'}
        text1={'Reducción '}
        text2={'de costos TI'}
      />
      <DotsImgage marginTop={'-50px'}>
        <CustomImage
          height={'28px'}
          width={'100px'}
          source={require('../../assets/PaqueteAtomic/dots1.png')}
        />
      </DotsImgage>
    </Card>
  );
};
