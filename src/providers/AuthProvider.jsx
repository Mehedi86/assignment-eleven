import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import axios from 'axios';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();


    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logoutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (updateData) => {
        return updateProfile(auth.currentUser, updateData);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('state captured', currentUser)
            setUser(currentUser);

            if (currentUser?.email) {
                const user = { email: currentUser.email };
                axios.post('https://assignment-eleven-server-black.vercel.app/jwtLogin', user, { withCredentials: true })
                    .then(res => {
                        console.log('login token', res.data);
                        setLoading(false)
                    })
            }
            else {
                axios.post('https://assignment-eleven-server-black.vercel.app/jwtLogout', {}, {
                    withCredentials: true
                }).then(res => {
                    console.log('logout token', res.data);
                    setLoading(false)
                })
            }
            
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        googleSignIn,
        logoutUser,
        createUser,
        updateUserProfile,
        loginUser,
        user,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;