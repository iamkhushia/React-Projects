
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBX3oDzamjDmcfrp-SgzA4tdnewTJPcZCg",
  authDomain: "image-upload-a51cd.firebaseapp.com",
  projectId: "image-upload-a51cd",
  storageBucket: "image-upload-a51cd.firebasestorage.app",
  messagingSenderId: "882386036016",
  appId: "1:882386036016:web:37b3742d0ad1c4d62a54f5",
  measurementId: "G-3KD24BTMVH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
