import React from 'react'
import { BiRightArrowAlt } from "react-icons/bi";
import ButtonStyle from "components/reusableStyles/ButtonStyle";

export default function Button({children, action, disabled, width, height, size, icon}) {

    return (
        <ButtonStyle 
            onClick={() => action()} 
            disabled={disabled} 
            width={width} 
            height={height} 
            size={size}
        >
            {children}  <BiRightArrowAlt size={icon ? icon : 32} />
        </ButtonStyle>
    )
}
