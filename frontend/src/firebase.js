// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxpABltfEN3-wmAF_jTVHXVYOIbJ-UyR4",
  authDomain: "aback-fc5ee.firebaseapp.com",
  projectId: "aback-fc5ee",
  storageBucket: "aback-fc5ee.appspot.com",
  messagingSenderId: "123628898299",
  appId: "1:123628898299:web:16ccbd25d0b2e8be6cad5e",
  measurementId: "G-5DV472C0S8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const provider = new GoogleAuthProvider()

export {auth, provider}
