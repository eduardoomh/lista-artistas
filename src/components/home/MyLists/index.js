import React from 'react'
import SubtitleStyle from "components/reusableStyles/SubtitleStyle";
import ListCard from 'components/home/ListCard';
import listsData from "./listsData";
import {DivMainContainer} from "./styles";

export default function MyLists() {
    return (
        <DivMainContainer>
            <SubtitleStyle>MIS LISTAS</SubtitleStyle>
            <div>
                {
                    listsData.map(element => (
                    <ListCard data={element} key={element.title} /> 
                    ))
                }
            </div>
            
        </DivMainContainer>
    )
}
