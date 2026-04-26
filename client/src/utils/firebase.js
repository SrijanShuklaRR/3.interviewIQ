
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "intai-18bd3.firebaseapp.com",
  projectId: "intai-18bd3",
  storageBucket: "intai-18bd3.firebasestorage.app",
  messagingSenderId: "567490196799",
  appId: "1:567490196799:web:142a203af8ede6e0680f8a"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}