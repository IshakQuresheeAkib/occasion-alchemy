// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBS7ZFE17rxXkJPQ_45XeA3L7VBmCBa8rk",
  authDomain: "occasion-alchemy.firebaseapp.com",
  projectId: "occasion-alchemy",
  storageBucket: "occasion-alchemy.appspot.com",
  messagingSenderId: "916412555018",
  appId: "1:916412555018:web:b479a7159a0103cebd64f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);