import {useContext} from 'react'
import ListContext from "context/ListContext";

export default function useListContext() {
    const {list, update} = useContext(ListContext);

    return {list, update}
}
