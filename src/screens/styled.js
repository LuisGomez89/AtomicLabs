import styled from "styled-components";
import theme from "../themes/lights";

export const Container = styled.ScrollView`
flex: 1;
`
export const CustomImage = styled.Image`
  height: ${props => props.height || '300px'};
  width: ${props => props.width || '350px'};
  margin-bottom: ${props => props.marginBottom || '15px'} ;
  margin-left: ${props => props.marginLeft || 'auto'};
  margin-top: ${props => props.marginTop || '80px'} ;
  margin-right: ${props => props.marginRight || 'auto'};
  border-radius: ${props => props.radius || '0px'};
  `
export const TextCustom = styled.Text`
margin-top:5% ;
font-size: 18px;
color: ${props => props.color || theme.color.secondary};
left: 21px;
margin-bottom: 13px;
font-family:  ${props => props.family || 'mono space'} ;
`;
