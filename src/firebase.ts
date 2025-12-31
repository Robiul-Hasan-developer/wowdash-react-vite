// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
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

// const navigate = useNavigate();

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

export const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

// Register user
export const registerWithEmailAndPassword = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    return user;
  } catch (error) {
    toast.success(`${error}`);
  }
};

// Login user
export const loginWithEmailAndPassword = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (error) {
    toast.success(`${error}`);
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

// signInWithPopupauth, provider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     // IdP data available using getAdditionalUserInfo(result)
//     // ...
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });
