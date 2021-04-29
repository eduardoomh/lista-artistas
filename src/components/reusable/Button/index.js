import React from 'react'
import { BiRightArrowAlt } from "react-icons/bi";
import ButtonStyle from "components/reusableStyles/ButtonStyle";

export default function Button({children, action, disabled}) {

    return (
        <ButtonStyle onClick={() => action()} disabled={disabled}>
            {children}  <BiRightArrowAlt size={32} />
        </ButtonStyle>
    )
}
