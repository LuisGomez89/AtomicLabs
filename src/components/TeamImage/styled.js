import styled from "styled-components";
import theme from '../../themes/lights'

 export const TeamText = styled.Text`
 color: ${props => props.color || theme.color.secondary};
 font-size: ${props => props.size || '12px'};
 text-align: ${props => props.align || 'center'};
 font-family:  ${props => props.family || 'mono space'} ;
 margin-left: ${props => props.marginLeft || '-5%'};

 width: ${props => props.width || 'auto'};
 ` 

export const AlineTeam = styled.View`
display: flex;
flex-direction: row;
justify-content: ${props => props.justify || 'flex-start'};
margin-bottom: 3%;
width: ${props => props.width || '70%'};
margin-right: auto;
margin-left: auto;
margin-top: ${props => props.marginTop || '0px'};
`