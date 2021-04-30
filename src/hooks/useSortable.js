import Sortable from 'sortablejs';

export default function useSortable() {

    const makeSortable = (ref, list, collection) => {
        new Sortable(ref.current, {
            group: 'shared', // set both lists to same group
            animation: 200,
            easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
            chosenClass: 'move-sortable',

            onEnd: (evt) => {
                let namesArray = [];
                let newArtistArray = [];
                const childnodes = Array.apply(null,evt.to.childNodes);
                childnodes.map(e => namesArray.push(e.id))

                namesArray.map(n => newArtistArray.push(list.find(li => li.nombre === n)))

                
                try{
                    collection.doc("hR1zUcSQOQKHrg8HeFKf").update({
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
    return {makeSortable}

    
}
