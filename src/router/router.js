  
import Home from "pages/Home";
import MasterList from "pages/MasterList";
import Artista from "pages/Artista";
import ErrorComponent from "pages/Error";
import MainLayout from "components/layout/MainLayout";

export const rutas = [
    {
        path: "/",
        layout: MainLayout,
        component: Home,
        exact: true
    },
    {
        path: "/artistas/:nombre",
        layout: MainLayout,
        component: Artista,
        exact: true
    },
    {
        path: "/lista-master",
        layout: MainLayout,
        component: MasterList,
        exact: true
    },
    {
        path: "*",
        layout: MainLayout,
        component: ErrorComponent,
        exact: true
    }

]
