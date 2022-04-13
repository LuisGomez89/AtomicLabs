import React from 'react'
import { TitleContainer, TitleText } from './styled'
import theme from '../../themes/lights'

export default function OurTeam () {
    return (
        <TitleContainer>
        <TitleText size={'30px'} >NUESTRO</TitleText><TitleText color={theme.color.primary1}  size={'30PX'}>EQUIPO</TitleText>
      </TitleContainer>
    )
}