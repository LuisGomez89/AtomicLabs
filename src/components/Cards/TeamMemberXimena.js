import React from 'react';
import {MemberContainer, CardMember, MemberImage, MemberText} from './styled';

export const XimenaMejia = () => {
  return (
    <MemberContainer>
      <CardMember>
        <MemberImage
          marginTop={'20px'}
          height={'200px'}
          width={'200px'}
          source={require('../../assets/PaqueteAtomic/TeamXimena.png')}
        />
        <MemberText>Ximena Mejía {'\n'}UX Designer</MemberText>
      </CardMember>
    </MemberContainer>
  );
};
