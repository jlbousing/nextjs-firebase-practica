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

    useEffect(() => {
        console.log("prueba firebase ",firebase);
        const unsubscribe = firebase.auth().onAuthStateChanged(authStateChanged);
        return () => unsubscribe();
      }, []);
    
    return {
     authUser,
     loading
    };
}