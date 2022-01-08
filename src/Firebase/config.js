import firebase from "firebase";
import "firebase/auth";
import "firebase/firebase-firestore";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLX3Ui50XtGxBSvfY5VJPsPcado5i8gME",
  authDomain: "olxclone-b4a30.firebaseapp.com",
  projectId: "olxclone-b4a30",
  storageBucket: "olxclone-b4a30.appspot.com",
  messagingSenderId: "764904143574",
  appId: "1:764904143574:web:0abc614e81fbb42a596777",
};

export default firebase.initializeApp(firebaseConfig);
