import {artistas} from "utils/images_artistas";

 const listsData = [
    {
        title: "LISTA MASTER",
        available: true,
        description: "Los mejores 20 artistas que protagonizaron la mayoría de mis playlists reunidos en una sola lista.",
        path: "/lista-master",
        images: [
            {
                url: artistas.alaina_castillo,
                name: "Alaina Castillo"
            },
            {
                url: artistas.kailee_morgue,
                name: "Kailee Morgue"
            },
            {
                url: artistas.sara_diamond,
                name: "Sara Diamond"
            }
            
        ]
    },
    {
        title: "LISTA B",
        available: false,
        description: "Los artistas que no quedaron dentro de la lista master están en ésta lista. Sientete libre de interactuar con otros 20 artistas.",
        path: "/lista-master",
        images: [
            {
                url: artistas.noah_cyrus,
                name: "Noah Cyrus"
            },
            {
                url: artistas.olivia_o_brien,
                name: "Olivia O' Brian"
            },
            {
                url: artistas.sophie_meiers,
                name: "Sophie Meiers"
            }
            
        ]
    },
    {
        title: "LISTA C",
        available: false,
        description: "No entraron en la lista master, tampoco en la lista B, pero no porque tengan musica mala, es porque en la lsita A y B no caben todos, son demasiados.",
        path: "/lista-master",
        images: [
            {
                url: artistas.sad_alex,
                name: "Sad Alex"
            },
            {
                url: artistas.dnce,
                name: "DNCE"
            },
            {
                url: artistas.loren_gray,
                name: "Loren Gray"
            }
            
        ]
    }
];

export default listsData;