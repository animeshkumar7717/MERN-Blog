// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-f0fda.firebaseapp.com",
  projectId: "mern-blog-f0fda",
  storageBucket: "mern-blog-f0fda.appspot.com",
  messagingSenderId: "657770951463",
  appId: "1:657770951463:web:4fac2fd0aefee5f7872f02"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);