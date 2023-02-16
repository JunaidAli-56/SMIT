// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAbc5AL1Dak_ynYPg7IUTfru1tRp3Aczco",
    authDomain: "fir-app-f4f37.firebaseapp.com",
    projectId: "fir-app-f4f37",
    storageBucket: "fir-app-f4f37.appspot.com",
    messagingSenderId: "193027094140",
    appId: "1:193027094140:web:6e180a8a75dbe562a67bf9",
    measurementId: "G-HJY4BFZ5XN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { auth, firestore, storage };