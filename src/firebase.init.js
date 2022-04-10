// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD23vBvbeam0nkSDaDDVLR2wr3D_DDRRvY",
    authDomain: "ema-john-simple-a3a78.firebaseapp.com",
    projectId: "ema-john-simple-a3a78",
    storageBucket: "ema-john-simple-a3a78.appspot.com",
    messagingSenderId: "895207766545",
    appId: "1:895207766545:web:720c290e1cf847cb7b4fb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;