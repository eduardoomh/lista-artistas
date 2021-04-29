import React from 'react'
import {useHistory} from "react-router-dom";
import SecondSubtitleStyle from "components/reusableStyles/SecondSubtitleStyle";
import ParagraphStyle from "components/reusableStyles/ParagraphStyle";
import Button from "components/reusable/Button";
import {ArticleStyle, AvailableSectionStyle, ImagesContainerStyle, InfoSectionStyle, ButtonSectionStyle} from "./styles";

export default function ListCard(props) {
    const {title, description, available, images, path} = props.data;
    const history = useHistory();

    const navigateTo = () =>{
        history.push(path)
    }

    return (
        <ArticleStyle>
            <AvailableSectionStyle available={available}>{available ? "YA DISPONIBLE" : "PROXIMAMENTE"}</AvailableSectionStyle>
            <ImagesContainerStyle>
                {
                    images.map(img => (
                        <img src={img.url} alt={img.name} key={img.name} width={90} height={90}/>
                    ))
                }
            </ImagesContainerStyle>
            <InfoSectionStyle>
                <SecondSubtitleStyle>{title}</SecondSubtitleStyle>
                <ParagraphStyle size="1.3rem">{description}</ParagraphStyle>
            </InfoSectionStyle>
            <ButtonSectionStyle>
                <Button action={navigateTo} disabled={!available}>Ver Lista</Button>
            </ButtonSectionStyle>
    </ArticleStyle>
    )
}
