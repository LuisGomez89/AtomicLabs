
import React from 'react'
import { TitleContainer, TitleText } from './styled'
import theme from '../../themes/lights'

export default function PotencialTitle () {
  return (
    <TitleContainer>
    <TitleText size={'50px'} >Desarrolla todo</TitleText>
    <TitleText color={theme.color.primary1} size={'50px'}>tu POTENCIAL</TitleText>
    <TitleText size={'45px'}>dentro del equipo</TitleText>
    <TitleText color={theme.color.primary1} size={'60px'}>ATOMIC<TitleText size={'60px'}>LABS</TitleText>
    </TitleText>
  </TitleContainer>
  )
}

