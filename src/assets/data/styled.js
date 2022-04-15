import styled from "styled-components";
import theme from '../../themes/lights'

export const ValidationContainer = styled.View`
align-items: center;
padding: 20px 0px 0px 0px;
margin-top: ${props => props.marginTop || '0px'};
`
export const ValidationText = styled.Text`
color: ${props => props.color || theme.color.secondary};
font-size: ${props => props.size || '30px'};
font-weight: ${props => props.weight || 'bold'};
text-align: ${props => props.align || 'center'};
font-family:  ${props => props.family || 'mono space'} ;
margin-top: ${props => props.marginTop || '0%'};
margin-bottom: ${props => props.marginBottom || '0%'};
width: ${props => props.width || 'auto'};
` 