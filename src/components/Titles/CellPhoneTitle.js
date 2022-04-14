import React from 'react';
import {TitleContainer, TitleText, IconImage, InLineImageAndText, KnowText} from './styled';
import theme from '../../themes/lights';

export default function CellPhoneTitle() {
  return (
    <TitleContainer>
      <TitleText size={'30px'}>VALIDA TU</TitleText>
      <TitleText color={theme.color.primary1} size={'30px'}>CELULAR</TitleText>
    </TitleContainer>
  );
}
