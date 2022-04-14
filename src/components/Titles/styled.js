import styled from "styled-components";
import theme from '../../themes/lights'

export const IconImage = styled.Image`
height: ${props => props.height || '100px'};
width: ${props => props.width || '100px'};
margin-bottom: ${props => props.marginBottom || '15px'} ;
margin-left: ${props => props.marginLeft || 'auto'};
margin-top: ${props => props.marginTop || '15px'} ;
margin-right: ${props => props.marginRight || 'auto'};
`

export const InfoContainer = styled.View`
width: 85%
margin-left: auto;
margin-right: auto
height: auto
`

export const InLineImageAndText = styled.View`
display: flex;
  flex-direction: row;
  justify-content: ${props => props.justify || 'flex-start'};
  margin-bottom: 1%;
  width: ${props => props.width || '80%'};
  margin-right: auto;
  margin-left: -20px;
  margin-top: 5px;
`
export const InLineImageAndTextPhone = styled.View`
display: flex;
  flex-direction: row;
  justify-content: ${props => props.justify || 'flex-start'};
  margin-bottom: 1%;
  width: ${props => props.width || '80%'};
  margin-right: auto;
  margin-left: -50px;
  margin-top: 5px;
  margin-bottom: -20px ;
`


export const TitleContainer = styled.View`
align-items: center;
padding: 20px 0px 0px 0px;
margin-top: ${props => props.marginTop || '0px'};
`
export const TitleText = styled.Text`
color: ${props => props.color || theme.color.secondary};
font-size: ${props => props.size || '30px'};
font-weight: ${props => props.weight || 'bold'};
text-align: ${props => props.align || 'center'};
font-family:  ${props => props.family || 'mono space'} ;
margin-top: ${props => props.marginTop || '0%'};
margin-bottom: ${props => props.marginBottom || '0%'};
width: ${props => props.width || 'auto'};
` 
export const KnowText = styled.Text`
color:  ${props => props.bgColor || theme.color.secondary};
font-size: ${props => props.size || '18px'};
font-weight: ${props => props.weight || '400'};
`

