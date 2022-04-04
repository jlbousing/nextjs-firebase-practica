// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcozaEYbaLxHhZ_haJJVGIZCIy7Ai8YRE",
  authDomain: "blogeekplatzi-9d7b3.firebaseapp.com",
  projectId: "blogeekplatzi-9d7b3",
  storageBucket: "blogeekplatzi-9d7b3.appspot.com",
  messagingSenderId: "68896446890",
  appId: "1:68896446890:web:60c48ee8cf52d30d86b3d3",
  measurementId: "G-7WBKKRZSFP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)