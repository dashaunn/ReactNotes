import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCO9_m00vwdzCWgPaiC860JoXL1btTaH2A",
  authDomain: "react-notes-1a65f.firebaseapp.com",
  projectId: "react-notes-1a65f",
  storageBucket: "react-notes-1a65f.appspot.com",
  messagingSenderId: "945314121895",
  appId: "1:945314121895:web:f0674ef0dbaed33a957382"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")