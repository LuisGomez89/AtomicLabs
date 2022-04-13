import styled from 'styled-components';
import theme from '../../themes/lights'

export const Card = styled.View`
    border-radius: 8px ;
    border: 1px solid black;
    background-color: ${props => props.bgColor || theme.color.primary1};
    width: 320px;
    height: 200px;
    margin: 50px 20px 10px 50px;
`

export const CardsContainer = styled.ScrollView`
    height: 500px;
    width: 100%;
    margin-bottom: auto;
    margin-top: auto;
`
export const ImageContainer = styled.View`
  margin-top: -10%;
  margin-bottom: -8%;
`