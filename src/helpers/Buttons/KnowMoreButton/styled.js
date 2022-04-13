import styled from 'styled-components'

export const Container = styled.View`
align-items: center;
flex: 1;
margin-bottom: -30px ;
`

export const TextContainer = styled.Text`
  color: white;
  font-size: 18px;
  font-family: 'mono space' ;
`

export const DownArrow = styled.Image.attrs(props => ({
    source: require('../../../assets/PaqueteAtomic/DownArrow.png'),
  }))`
    height: 60px;
    width: 60px;
    margin-top: 2%;
  `