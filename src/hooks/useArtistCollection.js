import  {useState, useEffect} from 'react'
import useFirebase from "hooks/useFirebase";

export default function useArtistCollection() {
    const [list, setList] = useState([]);
    const [artist, setArtist] = useState({});
    const {firestore, useCollectionData} = useFirebase();
    const collectionFirebase = firestore.collection('lista-artistas');
    const [listArray] = useCollectionData(collectionFirebase, {idField: 'id'});

    const findArtist = (name) => {
        const dataa = list.find(el => el.nombre === name);
        setArtist(dataa)
    }

    const findArtistContext = (name, array) => {
        const dataa = array.find(el => el.nombre === name);
        setArtist(dataa)
    }

    useEffect(() => {
        if(listArray?.length > 0){
            setList(listArray[0].lista)
        }
    },[listArray])
    

    return {list, setList, collectionFirebase, findArtist, artist, findArtistContext}
}

