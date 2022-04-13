import styled from "styled-components";
import theme from '../../themes/lights'

  export const TitleContainer = styled.View`
  align-items: center;
  padding: 20px 0px 0px 0px;
  margin-top: ${props => props.marginTop || '0px'};
  `
 export const TittleText = styled.Text`
 color: ${props => props.color || 'white'};
 font-size: ${props => props.size || '50px'};
 font-weight: ${props => props.weight || 'bold'};
 text-align: ${props => props.align || 'center'};
 font-family:  ${props => props.family || 'mono space'} ;
 margin-top: ${props => props.marginTop || '0%'};
 margin-bottom: ${props => props.marginBottom || '0%'};
 width: ${props => props.width || 'auto'};
 text-decoration: ${props => props.underline || 'none'};
 ` 