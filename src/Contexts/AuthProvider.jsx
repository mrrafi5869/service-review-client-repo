import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase.config';
import { createContext, useEffect, useState } from 'react';

const auth = getAuth(app);
export const authContext = createContext();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleSignIn = (googleProvider) => {
        return signInWithPopup(auth, googleProvider);
    }

    const githubSignIn = (githubProvider) => {
        return signInWithPopup(auth, githubProvider)
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        });
        return () => {
            return unSubscribe();
        }
    }, [])

    const authInfo = {user,  googleSignIn, githubSignIn, createUser, signIn, logOut}
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;