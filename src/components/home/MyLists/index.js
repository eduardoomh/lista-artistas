import React from 'react'
import SubtitleStyle from "components/reusableStyles/SubtitleStyle";
import ListCard from 'components/home/ListCard';
import listsData from "./listsData";
import {DivMainContainer, DivStyle} from "./styles";

export default function MyLists() {
    return (
        <DivMainContainer>
            <SubtitleStyle>MIS LISTAS</SubtitleStyle>
            <DivStyle>
                {
                    listsData.map(element => (
                    <ListCard data={element} key={element.title} /> 
                    ))
                }
            </DivStyle>
            
        </DivMainContainer>
    )
}
