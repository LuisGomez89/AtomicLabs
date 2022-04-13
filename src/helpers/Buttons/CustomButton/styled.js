import styled from 'styled-components'
import theme from '../../../themes/lights'

export const Container = styled.View`
  align-self: center;
  width: ${props => props.width || '200px'};
  height: ${props => props.height || '60px'};
  border: 1px solid black;
  border-radius: ${props => props.radius || '20px'};
  background-color: ${props => props.bgColor || 'white'};
  margin-top: ${props => props.marginTop || '10%'};
  margin-bottom: 5%;
  opacity: ${props => props.opacity || '1'};
`

export const ButtonText = styled.Text`
  text-align: center;
  color: ${props => props.color || theme.color.primary2};
  font-size: 20px;
  font-family: 'mono space' ;
  margin-top: auto;
  margin-bottom: auto;
  font-weight: bold;
`