import React from 'react'
import FooterStyle from "components/reusableStyles/FooterStyle";
import ParagraphStyle from "components/reusableStyles/ParagraphStyle";
import {DivContainer, PStyle} from "./styles";

export default function MainLayout(props) {
    const {children} = props;
    return (
        <DivContainer>
            {children}
            <FooterStyle>
                <ParagraphStyle size='1.8rem' color={'white'}>App creada por Jesus MH, los gustos musicales tambien son mios.</ParagraphStyle>
                <PStyle>JesusMH.com</PStyle>
            </FooterStyle>
        </DivContainer>
    )
}
