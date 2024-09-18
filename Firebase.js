// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCDQutcQIilyigZgPRcmWG2soNvZQJW_JA",
    authDomain: "react-website-b0d6f.firebaseapp.com",
    projectId: "react-website-b0d6f",
    storageBucket: "react-website-b0d6f.appspot.com",
    messagingSenderId: "565635633410",
    appId: "1:565635633410:web:22137624dc5b8ed6ffb21b",
    measurementId: "G-6ZZWEB1BN2"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
