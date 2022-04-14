import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import theme from '../../../themes/lights';
import {SendContainer, ButtonText} from './styled';

const SendButton = ({onPress, color, width, height}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <SendContainer
      color={theme.color.primary1}
      width={width}
      height={height}
      >
        <ButtonText >Enviar</ButtonText>
      </SendContainer>
    </TouchableOpacity>
  );
};

export default SendButton;