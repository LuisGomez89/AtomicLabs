import React from 'react'
import { Imagine } from './ImagineCard'
import { Explore } from './ExploreCard'
import { Conquer } from './ConquerCard'
import { CardsContainer } from './styled'
import { CustomImage } from '../../screens/styled'

export const PrincipalCards = () => {
    return(
    <CardsContainer horizontal = {true} >
        <Imagine />
        <Explore />
        <Conquer />
    </CardsContainer>
    )
}