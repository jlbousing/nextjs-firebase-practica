import firebase from 'firebase/app';
import 'firebase/auth';
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDcozaEYbaLxHhZ_haJJVGIZCIy7Ai8YRE",
  authDomain: "blogeekplatzi-9d7b3.firebaseapp.com",
  projectId: "blogeekplatzi-9d7b3",
  storageBucket: "blogeekplatzi-9d7b3.appspot.com",
  messagingSenderId: "68896446890",
  appId: "1:68896446890:web:60c48ee8cf52d30d86b3d3",
  measurementId: "G-7WBKKRZSFP"
};



if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}


export default firebase;

