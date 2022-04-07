// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhJHtruUen2gfb-Bc2sjnLTC2HqbDA9FQ",
  authDomain: "journal-app-react-424ec.firebaseapp.com",
  projectId: "journal-app-react-424ec",
  storageBucket: "journal-app-react-424ec.appspot.com",
  messagingSenderId: "242987171369",
  appId: "1:242987171369:web:714574cdd235654c99e638"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth()
const db = getFirestore()

export {
  app,
  provider,
  auth,
  db
}