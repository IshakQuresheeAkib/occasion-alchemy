import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, updateProfile,signOut, signInWithEmailAndPassword  } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";


export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)



    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword (auth,email,password);
    }

    const signIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    const googleSignIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const upgradeProfile = (name,image) => {
        setLoading(true)
        return updateProfile(auth.currentUser,{displayName:name,photoURL:image})
    }

    
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=> unSubscribe();
    },[])


    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleSignIn,
        upgradeProfile,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
  };