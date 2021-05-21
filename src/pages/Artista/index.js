import React, {useState, useEffect} from 'react'
import {useLocation} from "react-router-dom";
import useArtistCollection from "hooks/useArtistCollection";
import useListContext from "hooks/useListContext";
import ArtistInfo from "components/Artista/ArtistInfo";
import MusicInfo from "components/Artista/MusicInfo";
import {MainContainerStyle} from "./styles";

export default function Artista() {
    const [artistName, setArtistName] = useState('')
    const location = useLocation();
    const {list: listFetch, artist, findArtist, findArtistContext} = useArtistCollection();
    const {list} = useListContext();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    useEffect(() => {
        setArtistName(location.pathname.substring(10).replace('-', ' '));

        if(listFetch.length > 0 ){
            findArtist(artistName);
   
        }

    }, [listFetch, artist, artistName, findArtist, location.pathname])

    useEffect(() => {
        setArtistName(location.pathname.substring(10).replace('-', ' '));

        if(list.length > 0 ){
            findArtistContext(artistName, list)
            console.log("hola");
            console.log("prueba de credenciales");
            console.log("prueba de credenciales");
   
        }

    }, [listFetch, artist, artistName, findArtistContext, list, location.pathname])

    return (
        <MainContainerStyle>
            <ArtistInfo 
                path={artist?.pertenece_a} 
                nombre={artist?.nombre}
                descripcion={artist?.descripcion} 
                imagen={artist?.imagen}
            />
            <MusicInfo 
                nombre={artist?.nombre} 
                canciones={artist?.canciones}
                imagen={artist?.imagen}
            />
        </MainContainerStyle>
    )
}
