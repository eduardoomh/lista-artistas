import React from 'react'
import {DivContainer} from "./styles";

export default function MainLayout(props) {
    const {children} = props;
    return (
        <DivContainer>
            {children}
        </DivContainer>
    )
}
