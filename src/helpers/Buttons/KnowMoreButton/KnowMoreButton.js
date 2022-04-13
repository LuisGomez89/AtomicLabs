import React from "react";
import { TouchableOpacity} from "react-native";
import { Container, DownArrow, TextContainer } from "./styled";

export const KnowMoreButton = props => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <Container>
                <DownArrow />
                <TextContainer> Quiero saber más</TextContainer>
            </Container>
        </TouchableOpacity>
    )
}