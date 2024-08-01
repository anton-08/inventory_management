// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfjyj9vUrESZO1QIlBafSTZqXFhKFzd64",
  authDomain: "inventory-management-app-f0dcd.firebaseapp.com",
  projectId: "inventory-management-app-f0dcd",
  storageBucket: "inventory-management-app-f0dcd.appspot.com",
  messagingSenderId: "977378296290",
  appId: "1:977378296290:web:0a0660d8ba6dafee8fb9bb",
  measurementId: "G-02J511W9FV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}