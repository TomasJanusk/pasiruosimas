import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9cBOxTnPr-9iJuqEA-t6Ws9lWZ_ffcEY",
  authDomain: "kartojimas-holiday-photos.firebaseapp.com",
  projectId: "kartojimas-holiday-photos",
  storageBucket: "kartojimas-holiday-photos.appspot.com",
  messagingSenderId: "267132447777",
  appId: "1:267132447777:web:94bb7bd6bbf29f18d20760",
};

const app = firebase.initializeApp(firebaseConfig);

export default firebase;

export { app };
