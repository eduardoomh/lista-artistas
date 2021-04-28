import React, {useState, useEffect} from 'react'
import {useLocation} from "react-router-dom";
import useArtistCollection from "hooks/useArtistCollection";
import useListContext from "hooks/useListContext";

export default function Artista() {
    const [artistName, setArtistName] = useState('')
    const location = useLocation();
    const {list: listFetch, artist, findArtist, findArtistContext} = useArtistCollection();
    const {list} = useListContext();

    useEffect(() => {
        setArtistName(location.pathname.substring(10).replace('-', ' '));

        if(listFetch.length > 0 ){
            findArtist(artistName);
   
        }

    }, [listFetch, artist])

    useEffect(() => {
        setArtistName(location.pathname.substring(10).replace('-', ' '));

        if(list.length > 0 ){
            findArtistContext(artistName, list)
   
        }

    }, [listFetch, artist])

    return (
        <div>
            <p>{artistName}</p>
            <div>
                {artist?.descripcion}
            </div>
           </div>
    )
}
