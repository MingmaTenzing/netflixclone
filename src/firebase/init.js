// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYx7a_FWvDzXew0XY6eK5KXbryqnj4x-o",
  authDomain: "netflixclone-9506e.firebaseapp.com",
  projectId: "netflixclone-9506e",
  storageBucket: "netflixclone-9506e.appspot.com",
  messagingSenderId: "161573569715",
  appId: "1:161573569715:web:dc84660668ff0cfbfb9cc6",
  measurementId: "G-B4V1MM47P7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const  auth = getAuth(app)
