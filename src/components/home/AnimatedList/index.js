import React from 'react'
import {OlStyle, LiStyle, DivCircle, DivStyle, DivRectangle} from "./styles";

export default function AnimatedList() {
    return (
        <OlStyle>
            <LiStyle>
                <DivCircle />
                <DivStyle>
                    <DivRectangle />
                    <DivRectangle />
                </DivStyle>
            </LiStyle>

            <LiStyle>
                <DivCircle />
                <DivStyle>
                    <DivRectangle />
                    <DivRectangle />
                </DivStyle>
            </LiStyle>

            <LiStyle>
                <DivCircle />
                <DivStyle>
                    <DivRectangle />
                    <DivRectangle />
                </DivStyle>
            </LiStyle>

            <LiStyle>
                <DivCircle />
                <DivStyle>
                    <DivRectangle />
                    <DivRectangle />
                </DivStyle>
            </LiStyle>
        </OlStyle>
    )
}
