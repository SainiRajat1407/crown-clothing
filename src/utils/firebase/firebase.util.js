import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXb_yGNOuTbv2DqXKIC6Mgy0Gu1XX3NqE",
  authDomain: "crown-clothing-13944.firebaseapp.com",
  projectId: "crown-clothing-13944",
  storageBucket: "crown-clothing-13944.appspot.com",
  messagingSenderId: "849771114212",
  appId: "1:849771114212:web:fb4f6ca65aed666a6906f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
