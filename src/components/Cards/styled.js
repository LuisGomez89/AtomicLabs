import styled from 'styled-components';
import theme from '../../themes/lights'

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

export const Card = styled.View`
    border-radius: 8px ;
    background-color: ${props => props.bgColor || theme.color.primary1};
    width: 320px;
    height: 77%;
    margin: 40px 20px 10px 50px;
`
export const CardImage = styled.Image`
  width: 130px;
  height: 130px;
  margin: 7% 0%;
`
export const CardMember = styled.View`
 height: auto;
border-radius: 10px;
background-color:  ${props => props.bgColor || theme.color.primary3}; ;
align-items:center;
margin: 3% 0%
padding-bottom: 8%
`

export const CardsContainer = styled.ScrollView`
    height: 600px;
    width: 100%;
    margin-bottom: -15px;
    margin-top: 15px;
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
export const MemberImage = styled.Image`
  width: 130px;
  height: 130px;
  margin: 7% 0%;
`
export const MemberContainer = styled.View`
   width: 90%;
  height: auto;
  margin-left: 26px;
  margin-right: auto;
`
export const MemberText = styled.Text`
  color:  ${props => props.bgColor || theme.color.secondary};
  font-size: ${props => props.size || '18px'};
  font-weight: ${props => props.weight || '400'};
  text-align: ${props => props.align || 'center'};
  `

export const Viñeta = styled.Text`
font-size: 60px
font-weight: bold;
color: white;
margin: -20% 0% 0% 0%
`