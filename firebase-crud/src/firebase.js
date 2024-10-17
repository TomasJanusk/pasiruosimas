import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD22wGBDfOceoj_hOttRMs-3zfkYyoTkYo",
    authDomain: "react-app-crud-kartojimas.firebaseapp.com",
    projectId: "react-app-crud-kartojimas",
    storageBucket: "react-app-crud-kartojimas.appspot.com",
    messagingSenderId: "476462993505",
    appId: "1:476462993505:web:c6d6d5c2c14147e4ef1a20"
  };

const app = firebase.initializeApp(firebaseConfig);

export default firebase;

export { app };
