import styled from "styled-components";

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
