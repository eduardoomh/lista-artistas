import React from 'react'
import Header from "components/home/Header";
import AnimatedList from "components/home/AnimatedList";
import ParagraphStyle from "components/reusableStyles/ParagraphStyle";
import MyLists from 'components/home/MyLists';
import Developed from "components/home/Developed";

export default function Home() {
    return (
        <main>
            <Header />
            <AnimatedList />
            <ParagraphStyle semibold size='1.5rem'>
                Durante varios años me he sumergido en conocer nuevos artistas del género pop y derivados.
                Esta es una recopilación de los artistas mas determinantes de mi travesía.
            </ParagraphStyle>
            <MyLists />
            <Developed />
        </main>
    )
}
