import React from 'react';
import {View, Text} from 'react-native';
import {UpperImage, InlineImages, UpperContainer} from './styled';

export const UpperImages = () => {
  return (
    <UpperContainer>
      <InlineImages marginTop={'-100px'}>
        <UpperImage
          height={'30px'}
          width={'30px'}
          source={require('../../assets/PaqueteAtomic/one.png')}
        />
        <UpperImage
          height={'30px'}
          width={'30px'}
          source={require('../../assets/PaqueteAtomic/two.png')}
        />
      </InlineImages>
      <View>
        <UpperImage
          marginTop={'-5px'}
          height={'15px'}
          width={'100%'}
          source={require('../../assets/PaqueteAtomic/bar1.png')}
        />
      </View>
    </UpperContainer>
  );
};
