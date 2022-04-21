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

  messaging.getToken({ vapidKey: 'BEvLWTRvb9W3oJm8CIk51ke4d4PqF1RdtaJBFwvG_At2sphvK0eLV99WFPufh301rBJSXJe6k75WWizgoOjaFKU' })
  .then((currentToken) => {
    if (currentToken) {
      console.log("se va a registrar un token en la base de datos ",currentToken);
      firebase.firestore().collection("tokens")
        .doc(currentToken)
          .set({token: currentToken})
            .catch((error) => console.log("Error al registrar token en la base de datos",error));
    } else {
      console.log('No registration token available. Request permission to generate one.');
    }
  }).catch((err) => {
    console.log('Ha ocurrido un error al recibir el token. ', err);
  });

  
}

export default firebase;

