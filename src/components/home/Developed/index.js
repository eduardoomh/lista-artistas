import React from 'react'
import useImagesAWS from "hooks/useImagesAWS";
import { DiGithubBadge } from "react-icons/di";
import useUrls from "hooks/useUrls";
import {DivMainContainer, DivContainerStyle, UlContainerStyle} from "./styles";

export default function Developed() {
    const {react, firebase, vercel} = useImagesAWS();
    const {github} = useUrls();
 
    return (
        <DivMainContainer>
           <DivContainerStyle>
               <a href={github} target="_blank" rel="noopener noreferrer"><DiGithubBadge size={64} /></a>
               <p>App desarrollada con</p>
           </DivContainerStyle>
           <UlContainerStyle>
               <li>
                   <img src={react} alt="react logo" width={86} height={86} />
                   <p>ReactJs</p>
               </li>
               <li>
                   <img src={firebase} alt="react logo" width={86} height={86} />
                   <p>Firebase</p>
               </li>
               <li>
                   <img src={vercel} alt="react logo" width={86} height={86} />
                   <p>Vercel</p>
               </li>
           </UlContainerStyle>

        </DivMainContainer>
    )
}
