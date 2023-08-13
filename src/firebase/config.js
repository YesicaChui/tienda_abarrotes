// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjMT1vd8T2h2YzaxJcDYkYq_2n98kdu-8",
  authDomain: "tienda-de-abarrotes-a0f87.firebaseapp.com",
  projectId: "tienda-de-abarrotes-a0f87",
  storageBucket: "tienda-de-abarrotes-a0f87.appspot.com",
  messagingSenderId: "139494912259",
  appId: "1:139494912259:web:1658d202136a7490a53936"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

