// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "merm-estate-52b9c.firebaseapp.com",
  projectId: "merm-estate-52b9c",
  storageBucket: "merm-estate-52b9c.appspot.com",
  messagingSenderId: "911093414362",
  appId: "1:911093414362:web:24f04c2ac13d617480a8e3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);