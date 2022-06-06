
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAg2CxZdCm7hAl0r78W1Jy8-hwM30mKq-A",
  authDomain: "react-library-b2cf1.firebaseapp.com",
  projectId: "react-library-b2cf1",
  storageBucket: "react-library-b2cf1.appspot.com",
  messagingSenderId: "746404648074",
  appId: "1:746404648074:web:bb8fb9e71d280c4d988973",
  measurementId: "G-18HQEC485N"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)