import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../Firebase/Firebase.config';
import axios from 'axios';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    
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

    // google signIn

    const googleSignIn= () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    //logout 
    const logout =()=>{
        setLoading(true);
        return signOut(auth);

    }

    // update user profile

    const UpdateUserProfile =(name, photo) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }
    

    useEffect(() =>{
      const unsubscribe =   onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('currentUser is :', currentUser);
            setLoading(false);

            // get and set token 
            
           if(currentUser){
            axios.post('http://localhost:4000/jwt', {email: currentUser.email})
            .then(data => {
                console.log(data.data.token);
                localStorage.setItem('access-token', data.data.token)
            })
           }
           else{
             localStorage.removeItem('access-token')
           }

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
        logout,
        UpdateUserProfile,
        googleSignIn
        
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;