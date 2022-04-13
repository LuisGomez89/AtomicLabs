import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import theme from '../../../themes/lights';
import {Container, ButtonText} from './styled';

const CustomButton = ({onPress, color, width, height}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container
      color={theme.color.secondary}
      width={width}
      height={height}
      >
        <ButtonText >¡Quiero ser parte!</ButtonText>
      </Container>
    </TouchableOpacity>
  );
};

export default CustomButton;
