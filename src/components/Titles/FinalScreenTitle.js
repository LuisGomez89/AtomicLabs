import React from 'react';
import {TitleContainer, TitleText, InLineImageAndText} from './styled';
import theme from '../../themes/lights';

export default function FinalScreenTitle() {
  return (
    <TitleContainer>
      <TitleText size={'30px'}>TUS DATOS</TitleText>
      <TitleText color={theme.color.primary1} size={'30px'}>HAN SIDO ENVIADOS</TitleText>
      <TitleText  color={theme.color.primary1} size={'30px'}>CON ÉXITO</TitleText>
    </TitleContainer>
  );
}
