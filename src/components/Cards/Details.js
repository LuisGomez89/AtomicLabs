import React from 'react'
import {CardText, AlineContainer, Viñeta} from './styled'

export const DetailsCard = (props) => {
  return (
    <AlineContainer>
      <Viñeta>.</Viñeta>
      <CardText weight={props.weight1}>
        {props.text1}
        <CardText weight={props.weight2}>{props.text2}</CardText>
      </CardText>
    </AlineContainer>
  )
}
