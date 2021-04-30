import React from 'react'
import FooterStyle from "components/reusableStyles/FooterStyle";
import ParagraphStyle from "components/reusableStyles/ParagraphStyle";
import useDevice from "hooks/useDevice";
import useUrls from "hooks/useUrls";
import {DivContainer, PStyle} from "./styles";

export default function MainLayout(props) {
    const {children} = props;
    const {tablet} = useDevice();
    const {jesusmh} = useUrls();

    return (
        <DivContainer>
            {children}
            <FooterStyle>
                <ParagraphStyle size='1.8rem' color={'white'} center={tablet}>App creada por Jesus MH, los gustos musicales tambien son mios.</ParagraphStyle>
                <PStyle><a href={jesusmh} target="_blank" rel="noopener noreferrer">JesusMH.com</a></PStyle>
            </FooterStyle>
        </DivContainer>
    )
}
