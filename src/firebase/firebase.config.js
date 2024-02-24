// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZcmmDnfCcqY8HD-h1UG3LoMZV-ooQ1Z0",
  authDomain: "arctic-fashion.firebaseapp.com",
  projectId: "arctic-fashion",
  storageBucket: "arctic-fashion.appspot.com",
  messagingSenderId: "251216944888",
  appId: "1:251216944888:web:f1b5b30bf7972f5007250d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app