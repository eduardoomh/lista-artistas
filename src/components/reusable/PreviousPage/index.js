import React from 'react'
import {useHistory} from "react-router-dom";
import { BiChevronLeft } from "react-icons/bi";
import {DivStyle, PStyle} from "./styles";

export default function PreviousPage(props) {
    const {path, children} = props;
    const history = useHistory();

    const gotoPage = () => {
        history.push(path);
    }

    return (
        <DivStyle>
            <PStyle onClick={gotoPage}><BiChevronLeft size={36} /> {children}</PStyle>
        </DivStyle>
    )
}
