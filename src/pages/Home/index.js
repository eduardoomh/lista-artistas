import React from 'react'
import Header from "components/home/Header";
import AnimatedList from "components/home/AnimatedList";
import ParagraphStyle from "components/reusableStyles/ParagraphStyle";
import MyLists from 'components/home/MyLists';
import Developed from "components/home/Developed";
import useDevice from "hooks/useDevice";
import useUrls from "hooks/useUrls";
import { DiGithubBadge } from "react-icons/di";
import {DivContainer, MainContainerStyle, IconStyle} from './styles';

export default function Home() {
    const {desktop} = useDevice();
    const {github} = useUrls();

    return (
        <MainContainerStyle>
             <IconStyle href={github} target="_blank" rel="noopener noreferrer"><DiGithubBadge size={64} /></IconStyle>
            <DivContainer>
                <Header />
                <AnimatedList />
            </DivContainer>

            <ParagraphStyle semibold size={desktop ? '1.7rem' :'1.5rem'} width={desktop}>
                Durante varios años me he sumergido en conocer nuevos artistas del género pop y derivados.
                Esta es una recopilación de los artistas mas determinantes de mi travesía.
            </ParagraphStyle>
            <MyLists />
            <Developed />
        </MainContainerStyle>
    )
}
