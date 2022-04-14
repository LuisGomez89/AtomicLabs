import React from 'react';
import {TitleContainer, TitleText, IconImage, InLineImageAndText, KnowText} from './styled';
import theme from '../../themes/lights';

export default function KnowYou() {
  return (
    <TitleContainer>
      
      <IconImage
        height={'40px'}
        width={'60px'}
        source={require('../../assets/PaqueteAtomic/uno.png')}
      />
      <TitleText size={'30px'}>TE QUEREMOS</TitleText>
      <TitleText  color={theme.color.primary1} size={'30px'}>
        CONOCER
      </TitleText>
     
    </TitleContainer>
  );
}


