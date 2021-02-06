import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config =  {
  apiKey: "AIzaSyADbpm-3U8oi88qXqzCaVRzE8GNs3wvm04",
  authDomain: "crown-style.firebaseapp.com",
  projectId: "crown-style",
  storageBucket: "crown-style.appspot.com",
  messagingSenderId: "512115691016",
  appId: "1:512115691016:web:bca5dd64618f4f4e35cbbd",
  measurementId: "G-53TZSCN346"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
