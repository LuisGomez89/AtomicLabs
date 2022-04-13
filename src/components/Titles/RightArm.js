import React from 'react'
import { TitleContainer, TitleText } from './styled'
import theme from '../../themes/lights'

export default function RightArmTitle () {
    return (
        <TitleContainer>
        <TitleText size={'30px'} >SOMOS EL BRAZO</TitleText>
        <TitleText size={'30PX'}>DERECHO <TitleText color={theme.color.primary1}  size={'30PX'}>DE LA</TitleText></TitleText>
        <TitleText color={theme.color.primary1} size={'30px'}>TECNOLOGÍA</TitleText>
      </TitleContainer>
    )
}