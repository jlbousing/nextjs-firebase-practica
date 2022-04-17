import { useState, useEffect } from "react";
import firebase from './firebaseConfig';

const formatAuthUser = (user) => ({
    uid: user.uid,
    email: user.email
});

export const useFirebaseAuth = () => {

    const [authUser, setAuthUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const authStateChanged = async (authState) => {
        if (!authState) {
          setAuthUser(null)
          setLoading(false)
          return;
        }
    
        setLoading(true)
        var formattedUser = formatAuthUser(authState);
        setAuthUser(formattedUser);    
        setLoading(false);
    };

    const clear = () => {
      setAuthUser(null);
      setLoading(true);
    };


    const signInWithEmailAndPassword = (email, password) =>
      firebase.auth().signInWithEmailAndPassword(email, password);

    const createUserWithEmailAndPassword = (email, password) =>
      firebase.auth().createUserWithEmailAndPassword(email, password);
    
    const signWithGoogle = () => {
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider)
        .then((result) => {
          console.log("Usuario logeado con google auth ",result);
        })
    }

    const signWithFacebook = () => {
      let provider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithPopup(provider)
        .then((result) => {
            console.log("Usuario logeado con facebook auth ",result);
      })
    }

    const signOut = () =>
      firebase.auth().signOut().then(clear);

    useEffect(() => {
        console.log("prueba firebase ",firebase);
        const unsubscribe = firebase.auth().onAuthStateChanged(authStateChanged);
        return () => unsubscribe();
      }, []);
    
    return {
      authUser,
      loading,
      signInWithEmailAndPassword,
      createUserWithEmailAndPassword,
      signOut,
      signWithGoogle,
      signWithFacebook
    };
}