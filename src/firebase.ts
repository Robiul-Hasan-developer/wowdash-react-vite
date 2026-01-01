// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup
} from "firebase/auth";
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyAtHFBZc1OoowEwTOJJWuxkXoGN78C8czQ",
  authDomain: "wowdash-6e530.firebaseapp.com",
  projectId: "wowdash-6e530",
  storageBucket: "wowdash-6e530.firebasestorage.app",
  messagingSenderId: "191428046448",
  appId: "1:191428046448:web:8c1d04b6432bfae3334eb5",
  measurementId: "G-LE1CWEN369",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

export const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
const githubAuthProvider = new GithubAuthProvider();

// Register user
export const registerWithEmailAndPassword = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    return user;
  } catch (error) {
    console.log(error);
    toast.error(`${error}`);
  }
};

// Login user
export const loginWithEmailAndPassword = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (error) {
    console.log(error);
    toast.error(`Invalid Credentials. Credentials does not match!`);
  }
};

// Reset Password
export const sendPasswordReset = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return { success: true };
  } catch (error: any) {
    return {
      success: false,
      message: error?.message || "Failed to send reset email",
    };
  }
};

// Social Login -> Login with google popup
export const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleAuthProvider);
    const user = res.user;
    return user;
  } catch (error) {
    toast.error(`${error}`);
  }
};

// Social Login -> Login with github popup
export const signInWithGithub = async () => {
  try {
    const res = await signInWithPopup(auth, githubAuthProvider);
    const user = res.user;
    return user;
  } catch (error) {
    toast.error(`${error}`);
  }
};