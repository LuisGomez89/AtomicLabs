import React from 'react';
import {TouchableOpacity} from 'react-native';
import theme from '../../../themes/lights';
import {SendContainer, ButtonText} from './styled';

const ContinueButton = ({onPress, color, width, height}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <SendContainer color={theme.color.primary1} width={width} height={height} >
        <ButtonText >Continuar</ButtonText>
      </SendContainer>
    </TouchableOpacity>
  );
};

export default ContinueButton;