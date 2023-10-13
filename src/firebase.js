
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyD3IBexE-3_8pSgaGn4sytQ-N11vbl5t-A",
  authDomain: "buildpatch.firebaseapp.com",
  projectId: "buildpatch",
  storageBucket: "buildpatch.appspot.com",
  messagingSenderId: "592406915397",
  appId: "1:592406915397:web:af1023820c78275edbb62c",
  measurementId: "G-PJZ687VP9C"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);