import React from 'react';
import {View} from 'react-native';
import {Card, ImageContainer} from './styled';
import {CustomImage} from '../../screens/styled';

export const Imagine = () => {
  return (
    <View>
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
      </Card>
      <CustomImage
        marginTop={'20px'}
        resizeMode="stretch"
        height={'50px'}
        width={'150px'}
        source={require('../../assets/PaqueteAtomic/dots1.png')}
      />
    </View>
  );
};
