import React from 'react'
import {UlStyle, LiStyle} from "./styles";

export default function Symbology() {
    return (
        <UlStyle>
            <LiStyle first>
                <p>El mejor artista de la lista</p>
            </LiStyle>
            <LiStyle second>
                <p>Los mejores artistas de la lista</p>
            </LiStyle>
            <LiStyle third>
                <p>En peligro de descender a la lista B</p>
            </LiStyle>
        </UlStyle>
    )
}
