import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASEKEY,
  authDomain: "shopswift-929f8.firebaseapp.com",
  projectId: "shopswift-929f8",
  storageBucket: "shopswift-929f8.firebasestorage.app",
  messagingSenderId: "81813817810",
  appId: "1:81813817810:web:a958b64e08d2db9ad1a00b"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider()
export {auth,provider} 
