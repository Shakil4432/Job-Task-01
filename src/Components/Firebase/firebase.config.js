// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCk4zsyZGXzY_hz9yzpn0XvX3g8FXTG3n4",
  authDomain: "job-task-01-9b31a.firebaseapp.com",
  projectId: "job-task-01-9b31a",
  storageBucket: "job-task-01-9b31a.appspot.com",
  messagingSenderId: "112138560985",
  appId: "1:112138560985:web:88551c72f9a9ef6fbf65c8",
  measurementId: "G-ERF1F6GE4L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;
