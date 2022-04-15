
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

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
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app)