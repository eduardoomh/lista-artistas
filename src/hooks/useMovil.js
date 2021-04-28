import {useEffect, useState} from "react";
import useWindowSize from "hooks/useWindowSize";

export default function useMovil(){
    const [movil, setMovil] = useState();
    const {width} = useWindowSize();

    useEffect(() => {
        if(width < 800){
            setMovil(true)
        }else{
            setMovil(false)
        }
    },[width])
    
    return {movil}
    
}