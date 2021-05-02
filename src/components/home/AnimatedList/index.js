import React from 'react'
import {artistas} from "utils/images_artistas";
import {OlStyle, LiStyle, DivCircle, DivStyle, DivRectangle} from "./styles";

export default function AnimatedList() {
    return (
        <OlStyle>
            <LiStyle down>
                <DivCircle img={artistas.kailee_morgue} />
                <DivStyle>
                    <DivRectangle />
                    <DivRectangle />
                </DivStyle>
            </LiStyle>

            <LiStyle first>
                <DivCircle img={artistas.terror_jr} />
                <DivStyle>
                    <DivRectangle />
                    <DivRectangle />
                </DivStyle>
            </LiStyle>

            <LiStyle second>
                <DivCircle img={artistas.sara_diamond}/>
                <DivStyle>
                    <DivRectangle />
                    <DivRectangle />
                </DivStyle>
            </LiStyle>

            <LiStyle third>
                <DivCircle img={artistas.grae} />
                <DivStyle>
                    <DivRectangle />
                    <DivRectangle />
                </DivStyle>
            </LiStyle>
        </OlStyle>
    )
}
