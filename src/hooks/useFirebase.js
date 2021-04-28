import { useCollectionData } from 'react-firebase-hooks/firestore';
import {firebase,firestore} from "../firebase/firebaseConfig";


export default function useFirebase(){

    return{firestore, useCollectionData,firebase}
          

}