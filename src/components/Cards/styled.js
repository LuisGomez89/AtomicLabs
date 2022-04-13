import styled from 'styled-components';
import theme from '../../themes/lights'

export const Card = styled.View`
    border-radius: 8px ;

    background-color: ${props => props.bgColor || theme.color.primary1};
    width: 320px;
    height: 100%;
    margin: 50px 20px 10px 50px;
`

export const CardsContainer = styled.ScrollView`
    height: 500px;
    width: 100%;
    margin-bottom: auto;
    margin-top: auto;
`
export const CardText = styled.Text`
  color:  ${props => props.bgColor || theme.color.secondary};
  font-size: ${props => props.size || '18px'};
  font-weight: ${props => props.weight || '400'};
`
export const DotsImgage = styled.View`
  margin-top: ${props => props.marginTop || '0%'};
`

export const ImageContainer = styled.View`
  margin-top: -10%;
  margin-bottom: -8%;
`
export const AlineContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.justify || 'flex-start'};
  margin-bottom: 3%;
  width: ${props => props.width || '70%'};
  margin-right: auto;
  margin-left: auto;
  margin-top: ${props => props.marginTop || '0px'};
  `

export const Viñeta = styled.Text`
font-size: 60px
font-weight: bold;
color: white;
margin: -20% 0% 0% 0%
`