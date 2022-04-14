import React from 'react';
import {TitleContainer, TitleText, IconImage, InLineImageAndTextPhone} from './styled';
import theme from '../../themes/lights';
import { UpperImagesPhone } from '../UpperImages/UpperImagesPhone';

export default function CellPhoneTitle() {
  return (
    <TitleContainer>
      <UpperImagesPhone />
      <InLineImageAndTextPhone marginTop={'20px'} >
      <IconImage 
       height={'40px'}
       width={'40px'}
      source={require('../../assets/PaqueteAtomic/dos.png')}/>
      <TitleText size={'30px'}>VALIDA TU</TitleText>
      </InLineImageAndTextPhone>
      <TitleText marginTop={'-15px'} color={theme.color.primary1} size={'30px'}>CELULAR</TitleText>
    </TitleContainer>
  );
}
