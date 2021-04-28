import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp({
    apiKey: "AIzaSyCqndPidJ34TIt3wd7YBE6wcfQAGl1NqqA",
    authDomain: "artistlist-46971.firebaseapp.com",
    projectId: "artistlist-46971",
    storageBucket: "artistlist-46971.appspot.com",
    messagingSenderId: "364220504976",
    appId: "1:364220504976:web:b85e8860caab1219ee7115"
})

  
  const auth = firebase.auth();
  const firestore = firebase.firestore();

  export {firebase, auth, firestore}