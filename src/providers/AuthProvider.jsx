
// import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";


export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    const updateUserProfile = async (name, photo) => {
        await updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        });
        setLoading(false);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log(currentUser);

            // get and set token
            //     if (currentUser) {
            //         axios.post('https://bistro-boss-server-kappa-eight.vercel.app/jwt', { email: currentUser.email })
            //             .then(data => {
            //                 localStorage.setItem('access-token', data.data.token)
            //                 setLoading(false);
            //             })

            //     }
            //     else {
            //         localStorage.removeItem('access-token')
            //     }
            });
            return () => {
                unsubscribe();
            }
        }, [])

        const authInfo = {
            user,
            loading,
            createUser,
            signIn,
            googleSignIn,
            logOut,
            updateUserProfile
        }

        return (
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        );
    };

    export default AuthProvider;