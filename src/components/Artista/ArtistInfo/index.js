import React from 'react';
import PreviousPage from "components/reusable/PreviousPage";
import TitleStyle from "components/reusableStyles/TitleStyle";
import ParagrahpStyle from "components/reusableStyles/ParagraphStyle";
import useDevice from "hooks/useDevice";
import {DivContainerStyle, DivStyle, ImgStyle, PStyle} from "./styles";

export default function ArtistInfo(props) {
    const {nombre, descripcion, imagen, path} = props;
    const {desktop} = useDevice();

    return (
        <DivContainerStyle>
            <PreviousPage path={`/${path}`}>Volver a la lista</PreviousPage>
            <DivStyle>
                <ImgStyle src={imagen} width={desktop ? 360 : 320} height={desktop ? 360 : 320} alt={nombre} />
                <TitleStyle>{nombre || 'cargando'}</TitleStyle>
                <ParagrahpStyle size={desktop && '1.5rem'}>{descripcion || 'cargando'}</ParagrahpStyle>
                <PStyle>Pertenece a:<span>{path?.replace('-', ' ')}</span></PStyle>
            </DivStyle>
        </DivContainerStyle>
    )
}
