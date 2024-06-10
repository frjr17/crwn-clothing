// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDpBkkA456mcwCmzfI8wOIx5zDdeAhWZ5o",
    authDomain: "crwn-clothing-af2c4.firebaseapp.com",
    projectId: "crwn-clothing-af2c4",
    storageBucket: "crwn-clothing-af2c4.appspot.com",
    messagingSenderId: "912011632801",
    appId: "1:912011632801:web:a7c842e47569012246d0e0"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const auth = getAuth(firebaseApp)
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = null) => {
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            })
        } catch (error) {
            console.error('Error creating user', error.message)
        }
    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        return response;
    } catch (error) {
        console.error('Error creating user', error.message)
    }

}

export const signInAuthWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response;
}

export const signOutUser = async () => signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)
