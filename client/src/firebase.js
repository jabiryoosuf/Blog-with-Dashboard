// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-with-dashboard.firebaseapp.com",
  projectId: "blog-with-dashboard",
  storageBucket: "blog-with-dashboard.appspot.com",
  messagingSenderId: "33084177248",
  appId: "1:33084177248:web:43d9516c6920844453fc05"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);