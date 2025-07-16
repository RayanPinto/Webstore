// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEDPlwoAunTSZCmWXjA0mpBg3amgeYNXg",
  authDomain: "rayan-pinto.firebaseapp.com",
  projectId: "rayan-pinto",
  storageBucket: "rayan-pinto.firebasestorage.app",
  messagingSenderId: "767700221226",
  appId: "1:767700221226:web:4727ce1e531eb2779ab253",
  measurementId: "G-1RS7KGLESQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }
