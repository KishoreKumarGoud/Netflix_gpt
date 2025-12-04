/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "netflixgpt-a74a2.firebaseapp.com",
  projectId: "netflixgpt-a74a2",
  storageBucket: "netflixgpt-a74a2.firebasestorage.app",
  messagingSenderId: "469882124270",
  appId: "1:469882124270:web:9bce008676457c47e580ff",
  measurementId: "G-39HTDJ07SJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 
const auth = getAuth();
export {auth};