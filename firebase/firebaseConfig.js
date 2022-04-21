import firebase from 'firebase/app';
import 'firebase/auth';
import "firebase/firestore";
import "firebase/storage";
import "firebase/messaging";

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

if(typeof window != "undefined"){
  const messaging = firebase.messaging();

  messaging.getToken({ vapidKey: 'AAAAEAqMWao:APA91bF_5AkZixKtEEEDihJ8OmI10ovD5V47A2lX8MDCjc9V9gSKGFMZ6vsIqytfLhKp9CI5oNE-ioFrgOQTjP20vBIuRSIrUWBjzzzRwu59CLHc8jQc1S1aUp7j6CpgWB-m-ML6OWgi' })
  .then((currentToken) => {
    if (currentToken) {
      console.log("se va a registrar un token en la base de datos");
      firebase.firestore().collection("tokens")
        .doc(currentToken)
          .set({token: currentToken})
            .catch((error) => console.log("Error al registrar token en la base de datos",error));

    } else {
      // Show permission request UI
      console.log('No registration token available. Request permission to generate one.');
      // ...
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // ...
  });
}

export default firebase;

