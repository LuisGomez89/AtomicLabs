import React from 'react';
import {TitleContainer, TitleText, IconImage, InLineImageAndText} from './styled';
import theme from '../../themes/lights';
import { UpperImages } from '../UpperImages/UpperImages';

export default function KnowYouTitle() {
  return (
    <TitleContainer>
      <UpperImages />
      <InLineImageAndText marginTop={'20px'} >
      <IconImage height={'40px'} width={'40px'} source={require('../../assets/PaqueteAtomic/uno.png')}/>
      <TitleText marginTop={'20px'} size={'30px'}>TE QUEREMOS</TitleText>
      </InLineImageAndText>
      <TitleText marginTop={'-15px'} color={theme.color.primary1} size={'30px'}>CONOCER </TitleText>
    </TitleContainer>
  );
}


