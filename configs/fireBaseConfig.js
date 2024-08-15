// Import the necessary functions from Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyBQW6-GUtPZ4LkjNWZFDSjngyOSY7r4dA8",
  authDomain: "ai-travel-planner-36bda.firebaseapp.com",
  projectId: "ai-travel-planner-36bda",
  storageBucket: "ai-travel-planner-36bda.appspot.com",
  messagingSenderId: "625371542003",
  appId: "1:625371542003:web:d945b5b1307638799ce286",
  measurementId: "G-QML9SM06C5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);