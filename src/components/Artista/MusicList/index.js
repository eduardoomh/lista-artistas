import React from 'react'
import StarRatings from "react-star-ratings";
import useDevice from "hooks/useDevice";
import ImgRounded from "components/reusableStyles/ImgRounded";
import { UlStyle, LiStyle, SpanStyle, DivStyle, TitleStyle, SubtitleStyle, RatingStyle } from "./styles";

export default function MusicList(props) {
    const { data, imagen } = props;
    const {desktop} = useDevice();

    return (
        <UlStyle>
            {
                data?.length > 0 && data.map(el => (
                    <LiStyle key={el.cancion}>
                        <SpanStyle />
                        <DivStyle>
                            <ImgRounded
                                src={imagen}
                                alt={el.cancion}
                                width={desktop ? 60 : 42}
                                height={desktop ? 60 : 42}
                            />
                        </DivStyle>
                        <TitleStyle>{el.cancion}</TitleStyle>
                        <SubtitleStyle>La descubrí en {el.descubrimiento}</SubtitleStyle>
                        <RatingStyle>
                            <StarRatings
                                rating={el.calificacion}
                                starRatedColor='#EF4B4C'
                                numberOfStars={5}
                                name='rating'
                                starDimension="24px"
                                starSpacing="5px"
                            />
                            <span>{el.calificacion}</span>
                        </RatingStyle>
                    </LiStyle>
                ))
            }
        </UlStyle>
    )
}
