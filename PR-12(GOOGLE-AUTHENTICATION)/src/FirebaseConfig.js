
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIXrSCKCh9-CZEo4Tb04XBNAxMDfOfQfE",
  authDomain: "authentication-b5dc7.firebaseapp.com",
  projectId: "authentication-b5dc7",
  storageBucket: "authentication-b5dc7.firebasestorage.app",
  messagingSenderId: "356607738440",
  appId: "1:356607738440:web:23397b1e2498135da54e7d",
  measurementId: "G-71ZKBQHZSF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
