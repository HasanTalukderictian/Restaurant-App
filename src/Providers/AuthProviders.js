import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from '../Firebase/Firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    // create user for  Registration 
    const createUser = (email, password) =>{

        setLoading(true)
        return createUserWithEmailAndPassword(auth,email, password);
    }

    // login user 
    const signIn =(email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword( auth,email, password);
    }

    //logout 
    const logout =()=>{
        setLoading(true);
        return signOut(auth);

    }
    

    useEffect(() =>{
      const unsubscribe =   onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('currentUser is :', currentUser);
            setLoading(false);
        });
        return () =>{
            return unsubscribe();
        }
    },[])

    const authInfo ={
        user,
        loading,
        createUser,
        signIn,
        logout
        
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;