import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyCNS1RDgrK-uNoQ4zkX3AiqnCeIxBWiDOU",
    authDomain: "react-journalapp-6ee16.firebaseapp.com",
    projectId: "react-journalapp-6ee16",
    storageBucket: "react-journalapp-6ee16.firebasestorage.app",
    messagingSenderId: "216554904879",
    appId: "1:216554904879:web:e0fa99015a9c3b2be095da"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp)