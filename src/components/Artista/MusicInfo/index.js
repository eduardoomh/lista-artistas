import React from 'react'
import SubtitleStyle from "components/reusableStyles/SubtitleStyle";
import ParagraphStyle from "components/reusableStyles/ParagraphStyle";
import MusicList from "components/Artista/MusicList";
import useDevice from "hooks/useDevice";
import {DivContainerStyle} from './styles';

export default function MusicInfo(props) {
    const {nombre, canciones, imagen} = props;
    const {desktop} = useDevice();

    return (
        <DivContainerStyle>
            <SubtitleStyle size={desktop ? '2.7rem' :'2.2rem'}>CANCIONES</SubtitleStyle>
            <ParagraphStyle size={desktop && '1.5rem'}>
                Estas son algunas de las canciones de {nombre || 'cargando'} que me gustan mucho. 
                Estas fueron recurrentes en mis playlists y tienen un valor nostálgico para mi.
            </ParagraphStyle>
            <MusicList data={canciones} imagen={imagen} />
        </DivContainerStyle>
    )
}
