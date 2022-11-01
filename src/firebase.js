import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "chat-ccd87.firebaseapp.com",
  projectId: "chat-ccd87",
  storageBucket: "chat-ccd87.appspot.com",
  messagingSenderId: "462375526593",
  appId: "1:462375526593:web:91b0f735f845328a0c3440",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
