import styled from 'styled-components'
import theme from '../../../themes/lights'


export const DownArrow = styled.Image.attrs(props => ({
  source: require('../../../assets/PaqueteAtomic/DownArrow.png'),
}))`
  height: 55px;
  width: 55px;
  margin-top: 2%;
`
export const Container = styled.View`
align-items: center;
flex: 1;
margin-bottom: -30px ;
`
export const TextContainer = styled.Text`
  color: ${props => props.bgColor || theme.color.secondary};
  font-size: 18px;
  font-family: 'mono space' ;
`

