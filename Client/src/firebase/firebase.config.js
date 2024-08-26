
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbNf0iilimV4xXp4iwd0181SoKbGKmwwE",
  authDomain: "job-portal-660a9.firebaseapp.com",
  projectId: "job-portal-660a9",
  storageBucket: "job-portal-660a9.appspot.com",
  messagingSenderId: "383575626358",
  appId: "1:383575626358:web:f0b8373ce458b34a16c557"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
