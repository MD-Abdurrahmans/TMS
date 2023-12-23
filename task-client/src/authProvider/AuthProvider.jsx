import {  createContext, useEffect, useState } from "react"

import PropTypes from 'prop-types'
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import auth from "../firebase/firebase.config";

export const AuthContext  = createContext(auth);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
 
    // const axiosSecure = useAxiosSecure();


    
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };


  
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };


    // onAuthStateChange
  

    useEffect(()=>{


        const unSubscribe =       onAuthStateChanged(auth,(currentUser)=>{


            setUser(currentUser)
        })


        return unSubscribe;

    },[])


      




    const authInfo = {  user,
        loading,
        setLoading,
        createUser,
        signIn,
        signInWithGoogle,
        resetPassword,
        logOut,
        updateUserProfile,
     
      }

      // console.log('loadin',loading)
      console.log('user', user)
  return (


    <div>
       <AuthContext.Provider   value={authInfo}   >

           {children}
       </AuthContext.Provider>
    </div>
  )
}


AuthProvider.propTypes = {

    children:PropTypes.object,
}

export default AuthProvider





