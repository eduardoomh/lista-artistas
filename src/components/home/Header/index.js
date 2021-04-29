import React from 'react'
import useImagesAWS from "hooks/useImagesAWS";
import TitleStyle from "components/reusableStyles/TitleStyle";
import ImgRounded from "components/reusableStyles/ImgRounded";
import {TextStyle, DivContainer, DivMainContainer} from "./styles";

export default function Header() {
    const {jesusmh} = useImagesAWS();

    return (
        <DivMainContainer>
            <DivContainer>
                <TextStyle>JesusMH Presenta</TextStyle>
                <ImgRounded src={jesusmh} alt="jesusmh foto de perfil" width={80} height={80} />
            </DivContainer>
            <TitleStyle size={'4.5rem'}>LISTA - <br /> ARTISTAS</TitleStyle>
        </DivMainContainer>
    )
}
