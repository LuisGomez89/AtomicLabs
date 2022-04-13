import React from 'react';
import {View} from 'react-native';
import {Card, ImageContainer, DotsImgage} from './styled';
import {CustomImage} from '../../screens/styled';
import {TitleText} from '../Titles/styled';
import {DetailsCard} from './Details';

export const Conquer = () => {
  return (
      <Card>
        <ImageContainer>
          <CustomImage
          marginTop={'20px'}
            height={'200px'}
            width={'200px'}
            source={require('../../assets/PaqueteAtomic/Conquer.png')}
          />
        </ImageContainer>
        <CustomImage
        marginTop={'20px'}
        height={'10px'}
        width={'40%'}
        source={require('../../assets/PaqueteAtomic/Lines.png')}
      />
     <TitleText marginTop={'3%'} marginBottom={'5%'}>
        CONQUISTA
      </TitleText>
      <DetailsCard weight1={'700'} text1={'Desarrollo tecnológico '} text2={'y creación tecnologica'} />
      <DetailsCard weight2={'700'} text2={'Ciberseguridad'} />
      <DetailsCard weight1={'700'} text1={'Servicios de la Nube '}
      />
      <DotsImgage marginTop={'10%'}>
        <CustomImage
          height={'50px'}
          width={'150px'}
          source={require('../../assets/PaqueteAtomic/dots1.png')}
        />
      </DotsImgage>
      </Card>
  );
};
