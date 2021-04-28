import React, {useEffect, useRef}  from 'react'
import {useHistory} from "react-router-dom";
import Sortable from 'sortablejs';
import useArtistCollection from "hooks/useArtistCollection";
import useListContext from "hooks/useListContext";

export default function List(){
    const ref = useRef();
    const history = useHistory();
    const {list, collectionFirebase}  = useArtistCollection();
    const {update} = useListContext();

    const navigateTo = (artistName) => {
        history.push(`/artistas/${artistName.replace(' ', '-')}`)
    }
    

useEffect(() => {
    if(list?.length > 0){
        update(list);
        new Sortable(ref.current, {
            group: 'shared', // set both lists to same group
            animation: 150,

            onEnd: (evt) => {
                let namesArray = [];
                let newArtistArray = [];
                const childnodes = Array.apply(null,evt.to.childNodes);
                childnodes.map(e => {
                    namesArray.push(e.id);
                })


                namesArray.map(n => {
                    let itemFind = list.find(li => li.nombre === n)
                    newArtistArray.push(itemFind);
                })

                console.log(newArtistArray, "la buena")

                
                try{
                    collectionFirebase.doc("hR1zUcSQOQKHrg8HeFKf").update({
                        lista: newArtistArray
                    }).then(() => {
                        console.log("lista actualizada con exito")

                    });
                }
                catch(error){
                    console.log(error);
                }
                
                    
                
    
            }
        });
    }
}, [list]);

    return (
        <div >
            <h1>lista de artisstas</h1>
            <p>{list?.length}</p>
            <ol ref={ref}>
                {
                    list?.length > 0  ? list.map(li => (
                        <li key={li.nombre} id={li.nombre}>
                            <img src={li.imagen} width={40} />
                            <h2>{li.nombre}</h2>
                            <div>
                                <button onClick={() => navigateTo(li.nombre)}>Ver Artista</button>
                            </div>
                        </li>
                    ))
                    :
                    "cargando"
                }

            </ol>
        </div>
    )
}
