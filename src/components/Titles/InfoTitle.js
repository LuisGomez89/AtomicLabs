import React from 'react'
import { TitleText, InfoContainer } from './styled'

export const InfoTitle = props => {
    return (
      <InfoContainer>
        <TitleText
        marginTop={'5%'} 
        size={'18px'} 
        align={'left'} 
        weight={'400'} >
          {props.text1}
        </TitleText>
        <TitleText
        marginTop={'5%'}
        size={'18px'} 
        align={'left'} 
        weight={'400'}> 
          {props.text2}
        </TitleText>
      </InfoContainer>
    )
  }
  