// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBheTx7dl6eVbQgrmd_JCtN0kGoCP8712Q",
  authDomain: "netflixgpt-bda4c.firebaseapp.com",
  projectId: "netflixgpt-bda4c",
  storageBucket: "netflixgpt-bda4c.appspot.com",
  messagingSenderId: "441680702503",
  appId: "1:441680702503:web:88d2960396511996eef202",
  measurementId: "G-SP0SHYJ1WT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
