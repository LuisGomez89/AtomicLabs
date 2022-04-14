import React from 'react'
import { TouchableOpacity, Linking } from 'react-native'
import { FooterContainer, FooterText, ImageLogo, InLineLogos } from './styled'

export const Footer = () => {
    return (
    <FooterContainer>
        <FooterText> Ⓒ 2020 AtomicLabs. Todos los derechos reservados</FooterText>
        <FooterText underline={'underline'}>Aviso de privacidad</FooterText>
        <InLineLogos width={'70px'} justify={'space-between'}>
        <TouchableOpacity
        onPress={() => {
            Linking.openURL(
                'https://www.linkedin.com/company/atomic-mexico/'
            )
        }}>
        <ImageLogo
        height={'20px'}
        width={'25px'}
        source={require('../../assets/PaqueteAtomic/linkedin.png')}/>
        </TouchableOpacity>
    
    <TouchableOpacity
    onPress={() => {
        Linking.openURL(
            'https://twitter.com/AtomicMexico'
        )
    }}>
    <ImageLogo
    height={'20px'}
    width={'25px'}
    source={require('../../assets/PaqueteAtomic/twitter.png')}/>
    </TouchableOpacity>
    </InLineLogos>
    </FooterContainer>
    )
}