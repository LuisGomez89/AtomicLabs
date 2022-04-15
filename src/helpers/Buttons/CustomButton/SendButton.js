import React from 'react';
import {TouchableOpacity} from 'react-native';
import theme from '../../../themes/lights';
import {SendContainer, ButtonTextB} from './styled';

const SendButton = ({onPress, color, width, height, disabled, text, path, navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(path)} disabled={disabled}>
      <SendContainer width={width} height={height}>
        <ButtonTextB>{text}</ButtonTextB>
      </SendContainer>
    </TouchableOpacity>
  );
};

export default SendButton;