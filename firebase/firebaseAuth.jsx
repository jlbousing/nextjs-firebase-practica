import { useState, useEffect } from "react";
import firebase from './firebaseConfig';

const formatAuthUser = (user) => ({
    uid: user.uid,
    email: user.email,
    photoURL: user.photoURL,
    displayName: user.displayName
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

    const activePopUptoSign = () => {
      return firebase;
    }
    
    const signOut = () =>
      firebase.auth().signOut().then(clear);

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(authStateChanged);
        return () => unsubscribe();
      }, []);
    
    return {
      authUser,
      loading,
      signInWithEmailAndPassword,
      createUserWithEmailAndPassword,
      activePopUptoSign,
      signOut
    };
}