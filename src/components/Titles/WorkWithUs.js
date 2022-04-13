import React from 'react'
import { TitleContainer, TitleText } from './styled'
import theme from '../../themes/lights'

export default function WorkWithUs () {
    return (
        <TitleContainer>
        <TitleText size={'30px'} >TE ENCANTARÁ</TitleText>
        <TitleText color={theme.color.primary1}  size={'30PX'}>TRABAJAR CON</TitleText>
        <TitleText color={theme.color.primary1} size={'30px'}>NOSOTROS!</TitleText>
      </TitleContainer>
    )
}