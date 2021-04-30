import React from 'react'
import useImagesAWS from "hooks/useImagesAWS";
import TitleStyle from "components/reusableStyles/TitleStyle";
import ImgRounded from "components/reusableStyles/ImgRounded";
import useDevice from "hooks/useDevice";
import {TextStyle, DivContainer, DivMainContainer} from "./styles";

export default function Header() {
    const {jesusmh} = useImagesAWS();
    const {tablet, desktop} = useDevice();

    return (
        <DivMainContainer>
            <DivContainer>
                <TextStyle>JesusMH Presenta</TextStyle>
                <ImgRounded 
                    src={jesusmh} 
                    alt="jesusmh foto de perfil" 
                    width={desktop ? 70 : 80} 
                    height={desktop ? 70 : 80} 
                />
            </DivContainer>
            <TitleStyle size={tablet ? '7rem' : '4.5rem'}>LISTA - <br /> ARTISTAS</TitleStyle>
        </DivMainContainer>
    )
}
