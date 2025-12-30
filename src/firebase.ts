// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { toast } from 'react-toastify';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtHFBZc1OoowEwTOJJWuxkXoGN78C8czQ",
  authDomain: "wowdash-6e530.firebaseapp.com",
  projectId: "wowdash-6e530",
  storageBucket: "wowdash-6e530.firebasestorage.app",
  messagingSenderId: "191428046448",
  appId: "1:191428046448:web:8c1d04b6432bfae3334eb5",
  measurementId: "G-LE1CWEN369"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);



export const auth = getAuth(app);

// Register user
export const registerWithEmailAndPassword = async (email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        return user;
        
    } catch(error) {
        toast.success(`${error}`);
    }
}


// Login user
export const loginWithEmailAndPassword = async (email, password) => {
    try {
        const response = await signInWithEmailAndPassword(auth, email, password);
        return response;
        
    } catch(error) {
        toast.success(`${error}`);
    }
}