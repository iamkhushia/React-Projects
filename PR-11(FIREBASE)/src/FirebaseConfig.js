// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANKYHgIOyjVc8meD3FTVphmO-quG_a7U8",
  authDomain: "react-projects-57c52.firebaseapp.com",
  projectId: "react-projects-57c52",
  storageBucket: "react-projects-57c52.firebasestorage.app",
  messagingSenderId: "786794465383",
  appId: "1:786794465383:web:f06e16f8cd6a597f35acc2",
  measurementId: "G-8TCZ0QH4PJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
