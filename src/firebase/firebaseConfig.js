// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAWeRI_UAgCGG7mAz0_Omc7JJATC9ab_Os",
    authDomain: "react-firebase-auth-emai-c8869.firebaseapp.com",
    projectId: "react-firebase-auth-emai-c8869",
    storageBucket: "react-firebase-auth-emai-c8869.appspot.com",
    messagingSenderId: "113043916507",
    appId: "1:113043916507:web:8956f2527583c90082aefe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app;