import styled from "styled-components";

export const Container = styled.ScrollView`
flex: 1;
`
export const CustomImage = styled.Image`
  height: ${props => props.height || '300px'};
  width: ${props => props.width || '350px'};
  margin-left: ${props => props.marginLeft || 'auto'};
  margin-top: ${props => props.marginTop || '70px'} ;
  margin-right: ${props => props.marginRight || 'auto'};
  border-radius: ${props => props.radius || '0px'};
  `
