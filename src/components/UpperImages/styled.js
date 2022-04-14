import styled from 'styled-components';

export const UpperImage = styled.Image`
  margin-top: ${props => props.marginTop || '10%'};
  height: ${props => props.height || '300px'};
  width: ${props => props.width || '350px'};
  margin-left: ${props => props.marginLeft || 'auto'};
  margin-right: ${props => props.marginRight || 'auto'};
  margin-right: auto;
  border-radius: ${props => props.radius || '0px'};
`
export const UpperContainer = styled.View`
padding-top: 10%;
`
  export const InlineImages = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.justify || 'flex-start'};
  margin-bottom: 3%;
  width: ${props => props.width || '80%'};
  margin-right: auto;
  margin-left: auto;
  margin-top: ${props => props.marginTop || '-55px'};

`