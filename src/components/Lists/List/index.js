import React, { useEffect, useRef } from 'react'
import {useHistory} from "react-router-dom";
import useSortable from "hooks/useSortable";
import useDevice from "hooks/useDevice";
import ImgRounded from "components/reusableStyles/ImgRounded";
import Button from "components/reusable/Button";
import { OlStyle, LiStyle, ImgContainer, PStyle, SpanStyle, DivButton } from "./styles";

export default function List(props) {
    const { list, collectionFirebase } = props;
    const history = useHistory();
    const {makeSortable} = useSortable();
    const {desktop} = useDevice();
    const ref = useRef();

    const navigateTo = (artistName) => {
        history.push(`/artistas/${artistName.replace(' ', '-')}`)
    }

    useEffect(() => {
        if (list?.length > 0) {
            makeSortable(ref, list, collectionFirebase);
        }
    }, [list, collectionFirebase, makeSortable]);

    return (
        <OlStyle ref={ref}>
            {
                list?.length > 0 ? list.map((li, index) => (
                <LiStyle key={li.nombre} id={li.nombre} first={index === 0}>
                    <SpanStyle first={index > 0 && index < 4} last={index >= 17}  />
                    <ImgContainer>
                       <ImgRounded src={li.imagen} width={desktop ? 55 : 40} height={desktop ? 55 : 40} alt={li.nombre} />  
                    </ImgContainer>
                    <PStyle>{li.nombre}</PStyle>
                    <DivButton>
                        <Button 
                            action={() => navigateTo(li.nombre)} 
                            width={desktop ? '10rem' : '6rem'}
                            height={desktop ? '3rem': '2.3rem'}
                            size={desktop ? '1.1rem' :'.8rem'}
                            icon={desktop ? '24px' :'16px'}
                        >
                            Ver Artista
                        </Button>
                    </DivButton>
                </LiStyle>
                ))
                    :
                    "cargando"
            }

        </OlStyle>
    )
}
