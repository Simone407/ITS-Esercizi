// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxKwklZ0EDUZeAjN6JyW6xk8XSpwed8MI",
  authDomain: "prova-bcd04.firebaseapp.com",
  projectId: "prova-bcd04",
  storageBucket: "prova-bcd04.firebasestorage.app",
  messagingSenderId: "573464974331",
  appId: "1:573464974331:web:ec6bf71686c05188a1315e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { app, db, auth };