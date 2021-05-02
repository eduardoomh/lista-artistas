import React, { useEffect } from 'react'
import useArtistCollection from "hooks/useArtistCollection";
import useListContext from "hooks/useListContext";
import TitleStyle from "components/reusableStyles/TitleStyle";
import ParagrahpStyle from "components/reusableStyles/ParagraphStyle";
import List from "components/Lists/List";
import PreviousPage from "components/reusable/PreviousPage";
import Symbology from "components/Lists/Symbology";
import {fakeList} from "./FakeData";
import { MainContainerStyle, DivContainer } from "./styles";

export default function MasterList() {
    const { list, collectionFirebase } = useArtistCollection();
    const { update } = useListContext();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    useEffect(() => {
        if (list?.length > 0) {
            update(list);

        }
    }, [list, update]);

    return (
        <MainContainerStyle>
            <PreviousPage path='/'>Volver al menú</PreviousPage>
            <DivContainer>
                <TitleStyle size={'4rem'}>LISTA <br className="title-word-break" /> MASTER</TitleStyle>
                <ParagrahpStyle semibold size={'1.5rem'}>
                    Estos son los artistas mas determinantes de mis playlists, ordenados del mejor al peor.
                    <br />Arrastra y suelta los elementos de la lista si quieres divertirte un rato.
                </ParagrahpStyle>
            </DivContainer>
            {
                list?.length > 0 && (
                    <List
                        list={list}
                        collectionFirebase={collectionFirebase}
                    />
                ) 
            }
            {
                list?.length === 0 && (
                    <List
                        list={fakeList}
                        disabled={true}
                        collectionFirebase={collectionFirebase}
                    />
                )
            }
            <Symbology />

        </MainContainerStyle>
    )
}
