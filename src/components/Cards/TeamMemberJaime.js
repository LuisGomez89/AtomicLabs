import React from 'react';
import {MemberContainer, CardMember, MemberImage, MemberText} from './styled';

export const JaimeDominguez = () => {
  return (
    <MemberContainer>
      <CardMember>
        <MemberImage
          marginTop={'20px'}
          height={'200px'}
          width={'200px'}
          source={require('../../assets/PaqueteAtomic/TeamJaime.png')}
        />
        <MemberText>Jaime Domínguez {'\n'} Back-end Developer</MemberText>
      </CardMember>
    </MemberContainer>
  );
};
