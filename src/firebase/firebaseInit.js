import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDLF9BCj0bRQvFBJzj2x7d-udZEPgQPDs0",
    authDomain: "happycard-c464d.firebaseapp.com",
    projectId: "happycard-c464d",
    storageBucket: "happycard-c464d.appspot.com",
    messagingSenderId: "506510074673",
    appId: "1:506510074673:web:f76e9b82521f51507cc610",
    measurementId: "G-GDPM7RZ5DG"
};

const firebaseApp = firebase.initializeApp((firebaseConfig))
const timestamp = firebase.firestore.FieldValue.serverTimestamp()

export {timestamp}
export default firebaseApp.firestore()