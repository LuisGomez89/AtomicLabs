import styled from 'styled-components'

export const FooterContainer = styled.View`
background-color: black;
padding-top: 10%;
`
export const FooterText = styled.Text`
color: ${props => props.color || 'white'};
font-size: ${props => props.size || '15px'};
text-align: ${props => props.align || 'center'};
margin-top: ${props => props.marginTop || '0%'};
margin-bottom: ${props => props.marginBottom || '0%'}
width: ${props => props.width || 'auto'}
text-decoration: ${props => props.underline || 'none'}
`
export const ImageLogo = styled.Image`
  margin-top: ${props => props.marginTop || '10%'};
  height: ${props => props.height || '300px'};
  width: ${props => props.width || '350px'};
  margin-left: ${props => props.marginLeft || 'auto'};
  margin-right: ${props => props.marginRight || 'auto'};
  margin-right: auto;
  border-radius: ${props => props.radius || '0px'};
`
export const InLineLogos = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.justify || 'flex-start'};
  margin-bottom: 3%;
  width: ${props => props.width || '70%'};
  margin-right: auto;
  margin-left: auto;
  margin-top: ${props => props.marginTop || '0px'};

`