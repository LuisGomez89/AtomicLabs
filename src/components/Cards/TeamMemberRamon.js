import React from 'react'
import {MemberContainer, CardMember, MemberImage, MemberText} from './styled'


export const RamonGomez = () => {
    return (
      <MemberContainer>
      <CardMember>
          <MemberImage
            marginTop={'20px'}
            height={'200px'}
            width={'200px'}
            source={require('../../assets/PaqueteAtomic/TeamRamon.png')}
          />
         <MemberText>Ramón Gómez {'\n'} Front-end Developer</MemberText>
    </CardMember>
    </MemberContainer>
    )
  }
  
