// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT8DZ_mq-20b1zLSj6kVY95vyS2g7ofFY",
  authDomain: "geniuas-car-services.firebaseapp.com",
  projectId: "geniuas-car-services",
  storageBucket: "geniuas-car-services.appspot.com",
  messagingSenderId: "922950683649",
  appId: "1:922950683649:web:30edc8bbbf23e670108400"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
