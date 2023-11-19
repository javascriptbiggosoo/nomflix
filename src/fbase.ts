// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3q1THcxnctEENuLkVHoqwEGcl7yDQtuU",
  authDomain: "nomflix-798aa.firebaseapp.com",
  projectId: "nomflix-798aa",
  storageBucket: "nomflix-798aa.appspot.com",
  messagingSenderId: "198189087455",
  appId: "1:198189087455:web:e587baf1e86fc2152ac76a",
};

// Initialize Firebase
const fbApp = initializeApp(firebaseConfig);
export const authService = getAuth(fbApp);
export const dbService = getFirestore(fbApp);

export default fbApp;
